export interface Pet {
  id: number;
  name: string;
  species: string;
  gender: string;
  birthdate: Date;
}

export interface CreatePetRequest {
  name: string;
  species: string;
  gender: string;
  birthdate: Date;
}
