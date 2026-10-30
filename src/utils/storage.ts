import { ToneType } from '../types';

const STORAGE_KEYS = {
  TONE: 'sahaya_preferred_tone',
  LANG: 'sahaya_interface_lang',
  COMPLETED_GOALS: 'sahaya_completed_goals',
  BOOKMARKED_PHRASES: 'sahaya_bookmarks',
  PRACTICE_COUNT: 'sahaya_practice_count',
};

export const getStoredTone = (): ToneType => {
  if (typeof window === 'undefined') return 'everyday';
  const val = localStorage.getItem(STORAGE_KEYS.TONE);
  return (val === 'formal' || val === 'everyday') ? val : 'everyday';
};

export const setStoredTone = (tone: ToneType) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.TONE, tone);
};

export const getStoredInterfaceLang = (): 'en' | 'kn' => {
  if (typeof window === 'undefined') return 'en';
  const val = localStorage.getItem(STORAGE_KEYS.LANG);
  return val === 'kn' ? 'kn' : 'en';
};

export const setStoredInterfaceLang = (lang: 'en' | 'kn') => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.LANG, lang);
};

export const getCompletedGoals = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_GOALS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const markGoalCompleted = (goalId: string): string[] => {
  if (typeof window === 'undefined') return [];
  const current = getCompletedGoals();
  if (!current.includes(goalId)) {
    const updated = [...current, goalId];
    localStorage.setItem(STORAGE_KEYS.COMPLETED_GOALS, JSON.stringify(updated));
    return updated;
  }
  return current;
};

export const getBookmarks = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKED_PHRASES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const toggleBookmark = (phraseId: string): string[] => {
  if (typeof window === 'undefined') return [];
  const current = getBookmarks();
  const next = current.includes(phraseId)
    ? current.filter((id) => id !== phraseId)
    : [...current, phraseId];
  localStorage.setItem(STORAGE_KEYS.BOOKMARKED_PHRASES, JSON.stringify(next));
  return next;
};
