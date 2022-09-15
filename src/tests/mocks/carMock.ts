import { ICar } from '../../interfaces/ICar';

export const validCar: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};
export const carMockInvalid: any = {
	color: 'Ouro com adamantium',
}

export const carMockWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};


export const carMockForChangeWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
  model: 'Uno da Escada',
  year: 1968,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const coverageCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const noModelCar = {
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const noYearCar = {
  model: 'Uno da Escada',
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

export const noColorCar = {
  model: 'Uno da Escada',
  year: 1963,
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

export const noBuyValueCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  seatsQty: 2,
  doorsQty: 2
}

export const noSeatsCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  doorsQty: 2
}

export const noDoorsCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
}

export const carSeatsLtTwo = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 1,
  doorsQty: 2
}

export const carDoorsLtTwo = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 1
}