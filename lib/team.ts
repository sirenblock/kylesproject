export interface TeamMember {
  id: string
  name: string
  title: string
  yearsExperience: number
  credentials: string[]
  specializations: string[]
  bio: string
  image?: string
  expertise?: string[]
  social?: {
    linkedin?: string
    twitter?: string
  }
}

export const teamMembers: TeamMember[] = []

export function getTeamMember(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}

export function getTeamMemberByName(name: string): TeamMember | undefined {
  return teamMembers.find(member => member.name.toLowerCase() === name.toLowerCase())
}

// Business credentials
export const businessCredentials = {
  license: '',
  insurance: 'Fully Insured',
  yearsInBusiness: '',
  rating: '',
  memberships: [],
  certifications: []
}
