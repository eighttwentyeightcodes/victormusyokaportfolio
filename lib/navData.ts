import { Home, User, Briefcase, FolderKanban, FileText, PenTool, Target, Search, Users, Megaphone, Code, BarChart3, TrendingUp, Award, BookOpen, GraduationCap, Download, Calendar, Lightbulb, TrendingUpIcon, Newspaper } from 'lucide-react'

export interface NavItem {
  name: string
  href: string
  icon?: any
  description?: string
}

export interface NavSection {
  name: string
  href: string
  hasDropdown: boolean
  dropdownItems?: NavItem[]
}

export const navigationData: NavSection[] = [
  {
    name: 'Home',
    href: '/',
    hasDropdown: false,
  },
  {
    name: 'About',
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'View Full About Page',
        href: '/about',
        icon: User,
        description: 'Learn about my journey and expertise',
      },
      {
        name: 'Who I Am',
        href: '/about#who-i-am',
        icon: User,
        description: 'My background and story',
      },
      {
        name: 'Skills & Expertise',
        href: '/about#skills',
        icon: Award,
        description: 'Technical and marketing skills',
      },
      {
        name: 'Experience',
        href: '/about#experience',
        icon: Briefcase,
        description: 'Professional journey',
      },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
    // Services dropdown items are dynamically loaded from servicesData
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'View All Case Studies',
        href: '/case-studies',
        icon: FolderKanban,
        description: 'Explore all my work',
      },
      {
        name: 'Digital Marketing',
        href: '/case-studies#digital-marketing',
        icon: Target,
        description: 'Marketing campaign results',
      },
      {
        name: 'SEO Projects',
        href: '/case-studies#seo',
        icon: Search,
        description: 'Search optimization wins',
      },
      {
        name: 'Social Media',
        href: '/case-studies#social-media',
        icon: Users,
        description: 'Social growth strategies',
      },
      {
        name: 'Web Development',
        href: '/case-studies#web-dev',
        icon: Code,
        description: 'Website projects',
      },
    ],
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'View All Projects',
        href: '/portfolio',
        icon: FolderKanban,
        description: 'Complete portfolio showcase',
      },
      {
        name: 'Web Projects',
        href: '/portfolio#web',
        icon: Code,
        description: 'Websites and applications',
      },
      {
        name: 'Marketing Campaigns',
        href: '/portfolio#marketing',
        icon: Megaphone,
        description: 'Campaign creatives',
      },
      {
        name: 'Design Work',
        href: '/portfolio#design',
        icon: PenTool,
        description: 'UI/UX and graphics',
      },
      {
        name: 'Data Analytics',
        href: '/portfolio#analytics',
        icon: BarChart3,
        description: 'Dashboards and reports',
      },
    ],
  },
  {
    name: 'Resume',
    href: '/resume',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'View Full Resume',
        href: '/resume',
        icon: FileText,
        description: 'Complete professional profile',
      },
      {
        name: 'Experience',
        href: '/resume#experience',
        icon: Briefcase,
        description: 'Work history',
      },
      {
        name: 'Education',
        href: '/resume#education',
        icon: GraduationCap,
        description: 'Academic background',
      },
      {
        name: 'Skills',
        href: '/resume#skills',
        icon: Award,
        description: 'Technical competencies',
      },
      {
        name: 'Download Resume',
        href: '/resume#download',
        icon: Download,
        description: 'Get PDF version',
      },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'Latest Posts',
        href: '/blog',
        icon: Newspaper,
        description: 'Recent articles',
      },
      {
        name: 'Digital Marketing',
        href: '/blog/category/digital-marketing',
        icon: Target,
        description: 'Marketing insights',
      },
      {
        name: 'SEO Tips',
        href: '/blog/category/seo',
        icon: Search,
        description: 'Search optimization guides',
      },
      {
        name: 'Data Science',
        href: '/blog/category/data-science',
        icon: BarChart3,
        description: 'Analytics and insights',
      },
      {
        name: 'Web Development',
        href: '/blog/category/web-dev',
        icon: Code,
        description: 'Coding tutorials',
      },
    ],
  },
]
