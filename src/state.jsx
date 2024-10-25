const user = {
    name: "Сергей",
    lastname: "Смирнов",
    id: "5",
    email: "seryio@ya.ru",
    about: "Рассказываю историю о себе",
    avatar: "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
};

const users = {
    0: {name: "Мария", lastname: "Александрова"},
    1: {name: "Андрей", lastname: "Петров"},
    2: {name: "Сергей", lastname: "Симонов"},
    3: {name: "Анна", lastname: "Станиславова"},
    4: {name: "Есения", lastname: "Сергеева"},
};

export function getUser() {
    return user;
}

export function getUsers() {
    return users;
}