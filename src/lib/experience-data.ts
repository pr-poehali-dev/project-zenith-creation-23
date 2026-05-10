export interface Experience {
  id: string
  title: string
  company: string
  location: {
    city: string
    country: string
    lat: number
    lng: number
    isRemote: boolean
  }
  startDate: string
  endDate: string
  color: "pink" | "yellow" | "green" | "blue"
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Biotics Lab",
    company: "Зона заражения — Европа",
    location: {
      city: "Берлин",
      country: "Германия",
      lat: 52.52,
      lng: 13.405,
      isRemote: false,
    },
    startDate: "2024-01-15",
    endDate: "2025-12-27",
    color: "pink",
  },
  {
    id: "2",
    title: "Outpost Zeta",
    company: "Зона заражения — Восточная Европа",
    location: {
      city: "Киев",
      country: "Украина",
      lat: 50.4501,
      lng: 30.5234,
      isRemote: false,
    },
    startDate: "2024-03-20",
    endDate: "2025-12-27",
    color: "green",
  },
  {
    id: "3",
    title: "Holdout Alpha",
    company: "Зона заражения — Азия",
    location: {
      city: "Токио",
      country: "Япония",
      lat: 35.6762,
      lng: 139.6503,
      isRemote: false,
    },
    startDate: "2024-06-10",
    endDate: "2025-12-27",
    color: "blue",
  },
  {
    id: "4",
    title: "Arctic Station",
    company: "Зона заражения — Север",
    location: {
      city: "Мурманск",
      country: "Россия",
      lat: 68.9585,
      lng: 33.0827,
      isRemote: false,
    },
    startDate: "2024-09-05",
    endDate: "2025-12-27",
    color: "yellow",
  },
  {
    id: "5",
    title: "Overrun City",
    company: "Зона заражения — Северная Америка",
    location: {
      city: "Нью-Йорк",
      country: "США",
      lat: 40.7128,
      lng: -74.006,
      isRemote: false,
    },
    startDate: "2024-11-18",
    endDate: "2025-12-27",
    color: "pink",
  },
]
