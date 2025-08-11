abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract getSize(): void;
}

class _Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void {
        console.log(`Hình ${this.getName()} có chiều rộng: ${this.width}, chiều dài: ${this.height}`);
    }
}

const _rect = new _Rectangle("Hình chữ nhật", 10, 5);
console.log(`Tên hình: ${_rect.getName()}`);
_rect.getSize();
