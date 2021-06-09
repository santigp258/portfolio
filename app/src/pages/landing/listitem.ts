export interface LisItemsI {
  title: string;
  href: string;
  classNames?: string;
}

export const listItems: LisItemsI[] = [
  { title: 'home', href: 'home' },
  { title: 'mi historia', href: 'history' },
  { title: 'servicios', href: 'services' },
  { title: 'trabajos', href: 'works' },
  { title: 'contacto', href: 'contact' }
];
