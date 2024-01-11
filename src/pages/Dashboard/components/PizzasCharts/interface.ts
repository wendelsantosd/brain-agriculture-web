export interface PizzasChartsProps {
  data?: DataProps[];
  title: string;
}

interface DataProps {
  name: string;
  value: number;
}
