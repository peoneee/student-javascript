class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

    getAverage() {
        return (this.score1 + this.score2) / 2;
    }

    getRank() {
        let avg = this.getAverage();
        if (avg >= 8) return "Giỏi";
        if (avg >= 6.5) return "Khá";
        if (avg >= 5) return "Trung bình";
        return "Yếu";
    }
}

const students = [
    new Student("Nguyễn Thanh An", 20, 7, 8),
    new Student("Dương Quốc Bình", 17, 5, 6),
    new Student("Hà Huy Cường", 19, 9, 8),
    new Student("Nguyễn Thùy Dương", 21, 4, 5)
];

console.log("2180600125_Võ Lê Thiên Bảo");

console.log("Xếp loại của từng sinh viên:");
students.map(student => {
    console.log(`${student.name}: ${student.getRank()}`);
});

const averageClassScore = students.reduce((sum, student) => sum + student.getAverage(), 0) / students.length;
console.log(`\nĐiểm trung bình của lớp: ${averageClassScore.toFixed(2)}`);

const hasUnder18 = students.some(student => student.age < 18);
console.log(`\nCó sinh viên nào dưới 18 tuổi không? ${hasUnder18 ? "Có" : "Không"}`);

const allHaveNames = students.every(student => student.name.trim().length > 0);
console.log(`\nTất cả sinh viên có đầy đủ tên không? ${allHaveNames ? "Có" : "Không"}`);
