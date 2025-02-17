//Lê Trần Nhật Quang - 2180606590
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }
}
const students = [
    new Student("Nguyễn Thanh An", 20, 7, 8),
    new Student("Dương Quốc Bình", 17, 5, 6),
    new Student("Hà Huy Cường", 19, 9, 8),
    new Student("Nguyễn Thùy Dương", 21, 4, 5)
];

console.log("2180600125_Võ Lê Thiên Bảo");

function getRandomStudent(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 11);
            if (randomNum % 2 === 0) {
                const student = students[Math.floor(Math.random() * students.length)];
                resolve(student);
            } else {
                reject("Dữ liệu lỗi");
            }
        }, delay);
    });
}

const promise1 = getRandomStudent(2000); // Chờ 2s
const promise2 = getRandomStudent(4000); // Chờ 4s

// Thực thi cả hai promise với Promise.all
Promise.all([promise1, promise2])
    .then(results => {
        console.log("Dữ liệu từ promise.all:", results);
        console.log("Lấy dữ liệu hoàn thành");
    })
    .catch(error => {
        console.error("Lỗi từ promise.all:", error);
    });

// Thực thi cả hai promise với Promise.race
Promise.race([promise1, promise2])
    .then(result => {
        console.log("Dữ liệu từ promise.race:", result);
        console.log("Đã lấy được dữ liệu");
    })
    .catch(error => {
        console.error("Lỗi từ promise.race:", error);
    });