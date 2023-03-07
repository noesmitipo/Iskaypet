export interface Pet {
  id: number;
  name: string;
  kind: string;
  gender: string;
  birthdate: Date;
}

export interface CreatePetRequest {
  name: string;
  kind: string;
  gender: string;
  birthdate: Date;
}
