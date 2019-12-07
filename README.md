# Pidove Mail Service

<p align="center">
  <img width="200" height="auto" src=".github/logo.png"/>
</p>

This is a scalable REST API to send emails with predefined templates.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the [Node.js](https://nodejs.org/en/)
- You have installed the [Redis Database](https://redis.io)
- Or you can use a [Docker Container Platform](https://www.docker.com)
- You have a SMTP settings server

## Installing and execute with Docker

1. Clone this repository. `$ git clone https://github.com/malaquiasdev/pidove-mail-service.git`
2. Go to the project folder. `$ cd pidove-mail-service`
3. Copy the **.env.example** file and create an **.env** file with your SMTP settings and Redis credentials.
4. Build a image using docker. `$ docker build -t pidove-mailservice .`
5. Run the docker image. `$ docker run -p 8080:8080 pidove-mail-service`

## Using Pidove Mail Service

## Contributing to Pidove Mail Service

To contribute to Pidove Mail Service, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin pidove-mail-service/<branch_name>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

- [@malaquiasdev](https://github.com/malaquiasdev)

## Contact

If you want to contact me you can reach me at <mateusmalaquiasdev@outlook.com>.

## License

This project uses the following license: [MIT](https://github.com/malaquiasdev/pidove-mail-service/blob/master/LICENSE).
