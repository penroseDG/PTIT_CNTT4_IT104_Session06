class _$Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

let _$allStudents: _$Student[] = [];

class _$Classroom {
    private students: _$Student[] = [];

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh.");
        } else {
            this.students.forEach(student => {
                console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
            });
        }
    }

    addStudentInClass(id: number): void {
        const index = _$allStudents.findIndex(student => student.getId() === id);
        if (index !== -1) {
            this.students.push(_$allStudents[index]);
            _$allStudents.splice(index, 1);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong danh sách tất cả học sinh.`);
        }
    }

    removeStudent(id: number): void {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            _$allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student.setName(newName);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} để sửa.`);
        }
    }
}

_$allStudents.push(
    new _$Student(1, "penroseDG"),
    new _$Student(2, "Ducvip1612"),
    new _$Student(3, "dudangdaide"),
    new _$Student(4, "trangancut"),
    new _$Student(5, "trangnguvcl"),
    new _$Student(6, "sieucapdeptraivipro")
);

const _$classA = new _$Classroom();
const _$classB = new _$Classroom();

_$classA.addStudentInClass(1);
_$classA.addStudentInClass(2);
_$classA.addStudentInClass(3);

_$classB.addStudentInClass(4);
_$classB.addStudentInClass(5);
_$classB.addStudentInClass(6);

console.log("Lớp A ban đầu:");
_$classA.showStudents();

_$classA.removeStudent(2);
console.log("Lớp A sau khi xóa học sinh ID 2:");
_$classA.showStudents();

console.log("Danh sách tất cả học sinh sau khi trả học sinh về:");
console.log(_$allStudents.map(s => `ID: ${s.getId()}, Tên: ${s.getName()}`));

_$classA.editStudent(3, "Chiến");
console.log("Lớp A sau khi sửa tên học sinh ID 3:");
_$classA.showStudents();
