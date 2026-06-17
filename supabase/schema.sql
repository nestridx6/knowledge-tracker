-- Knowledge Tracker Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ============================================
-- PROFILES (extends Supabase auth.users)
-- ============================================
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  streak_count int default 0,
  longest_streak int default 0,
  last_session_date date,
  total_sessions int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', 'Seeker'));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================
-- PILLAR XP
-- ============================================
create table public.pillar_xp (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  pillar text not null check (pillar in ('finance', 'politics', 'geography', 'mindset', 'islam', 'books')),
  xp int default 0,
  level int default 1,
  unique(user_id, pillar)
);

alter table public.pillar_xp enable row level security;
create policy "Users can view own xp" on public.pillar_xp for select using (auth.uid() = user_id);
create policy "Users can update own xp" on public.pillar_xp for update using (auth.uid() = user_id);
create policy "Users can insert own xp" on public.pillar_xp for insert with check (auth.uid() = user_id);

-- ============================================
-- SESSIONS
-- ============================================
create table public.sessions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  date date default current_date,
  completed boolean default false,
  modules_completed int default 0,
  created_at timestamptz default now()
);

alter table public.sessions enable row level security;
create policy "Users can view own sessions" on public.sessions for select using (auth.uid() = user_id);
create policy "Users can insert own sessions" on public.sessions for insert with check (auth.uid() = user_id);
create policy "Users can update own sessions" on public.sessions for update using (auth.uid() = user_id);

-- ============================================
-- SESSION MODULES (one per pillar per session)
-- ============================================
create table public.session_modules (
  id uuid default uuid_generate_v4() primary key,
  session_id uuid references public.sessions(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  pillar text not null check (pillar in ('finance', 'politics', 'geography', 'mindset', 'islam', 'books')),
  content jsonb not null, -- stores the generated read, flashcards, reflection
  flashcard_scores jsonb, -- { cardIndex: correct/incorrect }
  reflection_answer text,
  completed boolean default false,
  xp_earned int default 0,
  created_at timestamptz default now()
);

alter table public.session_modules enable row level security;
create policy "Users can view own modules" on public.session_modules for select using (auth.uid() = user_id);
create policy "Users can insert own modules" on public.session_modules for insert with check (auth.uid() = user_id);
create policy "Users can update own modules" on public.session_modules for update using (auth.uid() = user_id);

-- ============================================
-- JOURNAL ENTRIES ("My Opinions")
-- ============================================
create table public.journal_entries (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  session_id uuid references public.sessions(id) on delete cascade,
  bullet_1 text not null,
  bullet_2 text not null,
  bullet_3 text not null,
  created_at timestamptz default now()
);

alter table public.journal_entries enable row level security;
create policy "Users can view own journal" on public.journal_entries for select using (auth.uid() = user_id);
create policy "Users can insert own journal" on public.journal_entries for insert with check (auth.uid() = user_id);
create policy "Users can update own journal" on public.journal_entries for update using (auth.uid() = user_id);

-- ============================================
-- BOOKS
-- ============================================
create table public.books (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  author text not null,
  pillar text not null check (pillar in ('finance', 'politics', 'geography', 'mindset', 'islam', 'books')),
  description text,
  key_ideas jsonb, -- array of strings
  status text default 'want_to_read' check (status in ('want_to_read', 'reading', 'read')),
  added_at timestamptz default now()
);

alter table public.books enable row level security;
create policy "Users can view own books" on public.books for select using (auth.uid() = user_id);
create policy "Users can insert own books" on public.books for insert with check (auth.uid() = user_id);
create policy "Users can update own books" on public.books for update using (auth.uid() = user_id);
create policy "Users can delete own books" on public.books for delete using (auth.uid() = user_id);

-- ============================================
-- Initialize pillar XP for new profiles
-- ============================================
create or replace function public.init_pillar_xp()
returns trigger as $$
begin
  insert into public.pillar_xp (user_id, pillar) values
    (new.id, 'finance'),
    (new.id, 'politics'),
    (new.id, 'geography'),
    (new.id, 'mindset'),
    (new.id, 'islam'),
    (new.id, 'books');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_profile_created
  after insert on public.profiles
  for each row execute procedure public.init_pillar_xp();
