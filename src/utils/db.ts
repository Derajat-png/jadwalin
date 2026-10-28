// src/utils/db.ts
// Client-side persistent user database for Jadwal.in

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role?: string;
  createdAt?: string;
}

const STORAGE_KEY_USERS = 'jadwalin_users_db';
const STORAGE_KEY_CURRENT_USER = 'jadwalin_current_user';

// Seed demo users so existing accounts also work out-of-the-box
const INITIAL_USERS: User[] = [
  {
    id: 'user_default_1',
    name: 'Daffa Ahmad Al Attas',
    email: 'daffaahmadalsch@student.ub.ac.id',
    password: 'beavysmart2026',
    role: 'Mahasiswa',
    createdAt: '2026-01-01T00:00:00.000Z'
  }
];

export function getUsers(): User[] {
  if (typeof window === 'undefined') return INITIAL_USERS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(INITIAL_USERS));
      return INITIAL_USERS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(INITIAL_USERS));
      return INITIAL_USERS;
    }
    return parsed;
  } catch (e) {
    console.error('Failed to parse user database from localStorage:', e);
    return INITIAL_USERS;
  }
}

export function findUserByEmail(email: string): User | undefined {
  if (!email) return undefined;
  const users = getUsers();
  const normalized = email.trim().toLowerCase();
  return users.find((u) => u.email.trim().toLowerCase() === normalized);
}

export function registerUser(user: Omit<User, 'id'>): { success: boolean; message: string; user?: User } {
  const existing = findUserByEmail(user.email);
  if (existing) {
    return {
      success: false,
      message: 'Email sudah terdaftar. Silakan langsung masuk.'
    };
  }

  const users = getUsers();
  const newUser: User = {
    ...user,
    email: user.email.trim().toLowerCase(),
    id: 'user_' + Date.now(),
    role: user.role || 'Mahasiswa',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  try {
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    return {
      success: true,
      message: 'Akun berhasil didaftarkan!',
      user: newUser
    };
  } catch (e) {
    return {
      success: false,
      message: 'Gagal menyimpan data akun ke penyimpanan browser.'
    };
  }
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user: User): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
  } catch (e) {
    console.error('Failed to save session:', e);
  }
}

export function logoutUser(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
}

export interface UserTask {
  id: string;
  title: string;
  category: string;
  deadline?: string;
  duration?: string;
  difficulty?: string;
  completed?: boolean;
  notes?: string;
  tag?: string;
  urgent?: boolean;
  time?: string;
}

export interface UserSchedule {
  id: string;
  time: string;
  duration: string;
  title: string;
  desc: string;
  tag: string;
  status: 'done' | 'active' | 'upcoming' | 'neutral';
}

export const DEMO_SCHEDULES: UserSchedule[] = [
  {
    id: 'demo_s1',
    time: '08.00',
    duration: '30 mnt',
    title: 'Persiapan & Daily Check-in',
    desc: 'Evaluasi tugas harian dan pengecekan materi perkuliahan.',
    tag: 'Rutinitas',
    status: 'done'
  },
  {
    id: 'demo_s2',
    time: '10.00',
    duration: '120 mnt',
    title: 'Fokus: Pemrograman Web & API',
    desc: 'Penyelesaian controller modul autentikasi dan pembuatan unit testing endpoint.',
    tag: 'Akademik',
    status: 'active'
  },
  {
    id: 'demo_s3',
    time: '12.30',
    duration: '60 mnt',
    title: 'Istirahat Siang & Makan',
    desc: 'Waktu rehat tanpa beban layar untuk mengembalikan ketajaman kognitif.',
    tag: 'Jeda Otomatis',
    status: 'neutral'
  },
  {
    id: 'demo_s4',
    time: '15.00',
    duration: '90 mnt',
    title: 'Laporan Praktikum Sistem Informasi',
    desc: 'Menyusun bab hasil dan pembahasan query relational database PostgreSQL.',
    tag: 'Praktikum',
    status: 'upcoming'
  },
  {
    id: 'demo_s5',
    time: '19.00',
    duration: '60 mnt',
    title: 'Slide Presentasi Kelompok',
    desc: 'Sinkronisasi diagram arsitektur sistem bersama anggota tim mata kuliah.',
    tag: 'Kerja Kelompok',
    status: 'upcoming'
  }
];

export const DEMO_TASKS: UserTask[] = [
  {
    id: 'demo_t1',
    title: 'Laporan Praktikum Pemrograman',
    category: 'Kuliah',
    deadline: 'Besok, 17.00',
    duration: '2 jam',
    difficulty: 'Sulit',
    urgent: true,
    tag: 'Praktikum Pemrograman'
  },
  {
    id: 'demo_t2',
    title: 'Laporan Perancangan Database',
    category: 'Kuliah',
    deadline: 'Senin, 23.59',
    duration: '1.5 jam',
    difficulty: 'Sedang',
    urgent: false,
    tag: 'Sistem Informasi'
  },
  {
    id: 'demo_t3',
    title: 'Slide Evaluasi Model Regresi',
    category: 'Kuliah',
    deadline: 'Selasa, 12.00',
    duration: '1 jam',
    difficulty: 'Mudah',
    urgent: false,
    tag: 'Kecerdasan Buatan'
  },
  {
    id: 'demo_t4',
    title: 'Revisi Proposal Skripsi',
    category: 'Akademik',
    deadline: 'Kamis, 15.00',
    duration: '3 jam',
    difficulty: 'Sulit',
    urgent: false,
    tag: 'Skripsi'
  }
];

export function getUserData(email?: string): { tasks: UserTask[]; schedules: UserSchedule[] } {
  if (typeof window === 'undefined') return { tasks: [], schedules: [] };
  const user = email ? { email } : getCurrentUser();
  if (!user || !user.email) return { tasks: [], schedules: [] };

  const normEmail = user.email.trim().toLowerCase();
  const key = 'jadwalin_data_' + normEmail;
  const raw = localStorage.getItem(key);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.tasks) && Array.isArray(parsed.schedules)) {
        return parsed;
      }
    } catch (e) {}
  }

  // Jika akun demo Daffa, berikan data demo awal
  if (normEmail === 'daffaahmadalsch@student.ub.ac.id') {
    const demoData = { tasks: DEMO_TASKS, schedules: DEMO_SCHEDULES };
    localStorage.setItem(key, JSON.stringify(demoData));
    return demoData;
  }

  // Untuk akun BARU, jadwal dan tugas WAJIB KOSONG secara default!
  const emptyData = { tasks: [], schedules: [] };
  localStorage.setItem(key, JSON.stringify(emptyData));
  return emptyData;
}

export function saveUserData(email: string, data: { tasks: UserTask[]; schedules: UserSchedule[] }): void {
  if (typeof window === 'undefined') return;
  const key = 'jadwalin_data_' + email.trim().toLowerCase();
  localStorage.setItem(key, JSON.stringify(data));
  window.dispatchEvent(new CustomEvent('jadwalin-data-updated'));
}

export function addUserTask(email: string, task: Omit<UserTask, 'id'>): UserTask {
  const data = getUserData(email);
  const newTask: UserTask = {
    ...task,
    id: 'task_' + Date.now(),
    completed: false
  };
  data.tasks.unshift(newTask);

  // Buat sesi jadwal harian baru otomatis
  const newSchedule: UserSchedule = {
    id: 'sched_' + Date.now(),
    time: task.time || '10.00',
    duration: task.duration || '60 mnt',
    title: task.title,
    desc: task.notes || 'Sesi pengerjaan untuk ' + task.title,
    tag: task.category || 'Tugas Baru',
    status: 'upcoming'
  };
  data.schedules.push(newSchedule);

  saveUserData(email, data);
  return newTask;
}


