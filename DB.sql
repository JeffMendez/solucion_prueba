CREATE DATABASE mi_camioncito;
USE mi_camioncito;

CREATE TABLE tipo_carga(
	id_carga INT IDENTITY(1,1),
	nombre VARCHAR(50)
	PRIMARY KEY (id_carga)
);

CREATE TABLE vehiculos (
	placa VARCHAR(15),
	capacidad DECIMAL(10, 4),
	consumo_combustible DECIMAL(10, 4),
	costos_depreciacion DECIMAL(10, 4),
	pos_latitud DECIMAL(10, 5),
	pos_longitud DECIMAL(10, 5),
	PRIMARY KEY (placa)
);

CREATE TABLE carga_soportada (
	placa VARCHAR(15),
	carga INT,
	PRIMARY KEY (placa, carga),
	FOREIGN KEY (placa) REFERENCES vehiculos(placa),
	FOREIGN KEY (carga) REFERENCES tipo_carga(id_carga)
);

CREATE TABLE clientes (
	dpi_cliente INT,
	nombres VARCHAR(15),
	apellidos VARCHAR(15),
	correo VARCHAR(15),
	telefono INT,
	PRIMARY KEY (dpi_cliente)
);

CREATE TABLE servicios (
	id_servicio INT IDENTITY(1,1),
	dpi_cliente INT,
	fecha_solicitada DATETIME,
	costo_total INT,
	porcentaje_cargo INT,
	direccion_recepcion VARCHAR(200),
	recepcion_latitud DECIMAL(10, 5),
	recepcion_longitud DECIMAL(10, 5),
	direccion_entrega VARCHAR(200),
	entrega_latitud DECIMAL(10, 5),
	entrega_longitud DECIMAL(10, 5),
	distancia_recorrer INT,
	url_documentacion VARCHAR(200),
	estado VARCHAR(10),
	PRIMARY KEY (id_servicio),
	FOREIGN KEY (dpi_cliente) REFERENCES clientes(dpi_cliente)
);

CREATE TABLE equipos_servicios (
	id_equipo INT IDENTITY(1,1),
	id_servicio INT,
	numero_pilotos INT,
	numero_ayudantes INT,
	tiempo_pilotos INT,
	tiempo_ayudantes INT,
	viaticos DECIMAL(10, 4),
	PRIMARY KEY (id_equipo),
	FOREIGN KEY (id_servicio) REFERENCES servicios(id_servicio)
);

CREATE TABLE gastos_adicionales (
	id_gasto INT IDENTITY(1,1),
	id_equipo INT,
	tipo_gasto VARCHAR(50),
	cantidad DECIMAL(10,4),
	total DECIMAL(10,4),
	PRIMARY KEY (id_gasto),
	FOREIGN KEY (id_equipo) REFERENCES equipos_servicios(id_equipo)
);

CREATE TABLE personals (
	dpi_persona BIGINT,
	nombres VARCHAR(15),
	apellidos VARCHAR(15),
	estado_civil VARCHAR(15),
	correo VARCHAR(15),
	telefono INT,
	PRIMARY KEY (dpi_persona)
);

CREATE TABLE asignacion_equipo (
	id_asignacion INT IDENTITY(1,1),
	dpi_personal BIGINT,
	id_equipo INT,
	tipo INT,
	vehiculo VARCHAR(15),
	PRIMARY KEY (id_asignacion),
	FOREIGN KEY (dpi_personal) REFERENCES personals(dpi_persona),
	FOREIGN KEY (id_equipo) REFERENCES equipos_servicios(id_equipo),
	FOREIGN KEY (vehiculo) REFERENCES vehiculos(placa)
);



