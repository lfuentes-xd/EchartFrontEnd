export interface DataInfo {
    edad:   number;
    peso:   number;
    altura: number;
    sexo:   Sexo;
    muneca: number;
    biceps: number;
}

export enum Sexo {
    Hombre = "Hombre",
    Mujer = "Mujer",
}



export interface ApartmentsInfo {
    precio:         number;
    mt2:            number;
    ubicacion:      Ubicacion;
    estrato:        number;
    alcobas:        number;
    banos:          number;
    balcon:         number;
    parqueadero:    Administracion;
    administracion: Administracion;
    avaluo:         number;
    terminado:      number;
    terminado_flag: Administracion;
}

export enum Administracion {
    No = "no",
    Si = "si",
}

export enum Ubicacion {
    Norte = "norte",
    Occidente = "occidente",
}

interface WeigthData {
    peso_max: number;
    peso_min: number;
    peso_promedio: number;
    peso_total: number;
    total: number;
}

export interface ApiResponse {
    Hombres: WeigthData;
    Mujeres: WeigthData;
}

export interface Biceps{
    biceps: number,
    peso: number
}