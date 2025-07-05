Taller Docker
============

## Intro

- Presentación de Docker (repaso)
- Virtualización y tipos (repaso)

## Primeros pasos: contenedores e imágenes

- ejecución `docker run` (repaso)
- tags y versiones

[docker_1_run_inicial.webm](https://github.com/user-attachments/assets/742c75f6-e075-44c3-a5b8-bc7976cad74d)

[docker_2_versiones.webm](https://github.com/user-attachments/assets/f07772ca-f06b-4e26-ba1c-51fa6acdecca)

## Imágenes propias: construcción

- `Dockerfile`s
- `docker docker build` (repaso)
- `COPY` y `RUN`
- orden y compresión de capas
- `.dockerignore`
- `docker push`

[docker_3_build.webm](https://github.com/user-attachments/assets/0db197ba-1660-4455-8422-fae5f7946fae)

[docker_4_run_imagen_personalizada.webm](https://github.com/user-attachments/assets/e2bdc223-e14d-467b-9e4b-db76cc2a0c9d)

## Monitoreo

- `docker ps` & `docker top`
- ingreso al contenedor (con redis) `docker exec`
- `docker logs`
- intro a estado (ciclo de vida del contenedor)
- `docker kill` & `docker rm`
- intro a redes (`--net host`)

> Un servidor común y corriente

[docker_5_servidor.webm](https://github.com/user-attachments/assets/668ebae8-9e51-4160-b96a-41c7cd09c65d)

> Inicio en modo _demonio_ (aunque `-d` es por _dettached_)

[docker_6_servidor_dockerizado.webm](https://github.com/user-attachments/assets/62732318-24b4-4fa2-ba17-8780b0894aeb)

> Acceso a los logs

[docker_7_logs.webm](https://github.com/user-attachments/assets/731f457f-0fc8-4192-a870-a7c1778308dc)

> Acceso y `kill`

[docker_8_kill.webm](https://github.com/user-attachments/assets/cf8e9730-07e7-46e1-92bb-c2ec93dcd7ac)

> Otro ejemplo: una base `redis`

[docker_9_run_redis.webm](https://github.com/user-attachments/assets/6ffea274-d736-4d70-b16f-b7a93236c0e8)

> Nombrando contenedores

[docker_10_run_con_nombre.webm](https://github.com/user-attachments/assets/b66681eb-1d16-489b-812d-f3b1de37deaf)

> Ingreso a un contenedor existe con `exec`

[docker_11_exec.webm](https://github.com/user-attachments/assets/37b71132-06e8-4348-995d-2655fa77fd7a)

[docker_12_exec_vs_run.webm](https://github.com/user-attachments/assets/c839a4fe-da7e-4d23-8494-bb82fe2dc9b0)

> Estado efímero

[docker_13_estado.webm](https://github.com/user-attachments/assets/ae776f88-7e02-409f-9d88-789e5e0b1688)

## Gestión de recursos

 - mapeo puertos (`-p host:contenedor`)
 - mapeo de directorios
 - mención a volúmenes

## Orquestación: docker compose

- Variables de entorno
- Volúmenes
- Puertos y redes (si se llega)
- archivo `docker-compose.yml`
- comandos `up`, `up --build`, `down` y `stop`
- Archivos multi contenedor


```bash
$ hola-mundo-http$ curl localhost:9090/hola
¡Buen día Mundo! Hola Mundo Web
$ hola-mundo-http$ curl localhost:9090/hola
¡Buen día Mundo! Hola Mundo Web
$ hola-mundo-http$ curl localhost:9090/visitas
Hubo 1 visitas
$ hola-mundo-http$ curl localhost:9090/hola
¡Buen día Mundo! Hola Mundo Web
$ hola-mundo-http$ curl localhost:9090/visitas
Hubo 2 visitas
```