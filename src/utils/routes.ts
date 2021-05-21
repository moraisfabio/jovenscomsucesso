interface RoutesProps {
  name: string;
  component: string;
  path: string;
}

const Routes: RoutesProps[] = [
  { name: 'home', component: 'Home', path: '/' },
];

export default Routes;
