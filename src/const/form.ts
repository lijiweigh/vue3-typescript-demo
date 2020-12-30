export enum FormType {
  Online = 1,
  Promotion,
  Offline
}

export const FormTypeList = [
  {
    value: FormType.Online,
    title: 'Online'
  },
  {
    value: FormType.Promotion,
    title: 'Promotion'
  },
  {
    value: FormType.Offline,
    title: 'Offline'
  }
]

export enum FormResource {
  Sponsor = 1,
  Venue
}

export const FormResourceList = [
  {
    value: FormResource.Sponsor,
    title: 'Sponsor'
  },
  {
    value: FormResource.Venue,
    title: 'Venue'
  }
]