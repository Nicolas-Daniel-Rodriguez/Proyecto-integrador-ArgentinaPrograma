export interface JwtDTO{
  token: string;
  bearer: string;
  nombreUsuario: string;
  authorities: string[];
}