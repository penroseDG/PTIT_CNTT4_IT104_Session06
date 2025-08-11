class Sach {
    constructor(
        public ma: number,
        public tieuDe: string,
        public tacGia: string,
        public soLuong: number,
        public trangThai: string
    ) {}
}

class ThanhVien {
    constructor(
        public ma: number,
        public hoTen: string,
        public lienHe: string,
        public sachMuon: SachMuon[] = [],
        public trangThai: string = "hoat_dong"
    ) {}
}

class SachMuon {
    constructor(
        public maThanhVien: number,
        public maSach: number,
        public hanTra: Date
    ) {}
}

class ThuVien {
    sach: Sach[] = [];
    thanhVien: ThanhVien[] = [];

    themSach(s: Sach): void {
        this.sach.push(s);
    }

    hienSach(): void {
        if (this.sach.length === 0) {
            console.log("Chưa có sách trong thư viện.");
        } else {
            this.sach.forEach(s => {
                console.log(`Mã: ${s.ma}, Tựa: ${s.tieuDe}, Tác giả: ${s.tacGia}, Số lượng: ${s.soLuong}, Trạng thái: ${s.trangThai}`);
            });
        }
    }

    dangKyThanhVien(ma: number, hoTen: string, lienHe: string): void {
        const tv = new ThanhVien(ma, hoTen, lienHe);
        this.thanhVien.push(tv);
        console.log(`Đã đăng ký thành viên: ${hoTen}`);
    }

    khoaThanhVien(ma: number): void {
        const tv = this.thanhVien.find(m => m.ma === ma);
        if (tv) {
            tv.trangThai = "khoa";
            console.log(`Đã khóa thành viên: ${tv.hoTen}`);
        } else {
            console.log("Không tìm thấy thành viên.");
        }
    }

    hienThanhVien(): void {
        if (this.thanhVien.length === 0) {
            console.log("Chưa có thành viên.");
        } else {
            this.thanhVien.forEach(tv => {
                console.log(`Mã: ${tv.ma}, Họ tên: ${tv.hoTen}, Liên hệ: ${tv.lienHe}, Trạng thái: ${tv.trangThai}`);
            });
        }
    }
}

const tvien = new ThuVien();
const s1 = new Sach(1, "Tôn Tử Binh Pháp", "Tôn Vũ", 4, "co_san");
const s2 = new Sach(2, "Tam Quốc Chí", "Trần Thọ", 3, "co_san");
const s3 = new Sach(3, "Tây Du Ký", "Ngô Thừa Ân", 5, "co_san");

tvien.themSach(s1);
tvien.themSach(s2);
tvien.themSach(s3);

tvien.hienSach();

tvien.dangKyThanhVien(1, "Lý Tiểu Long", "0901234567");
tvien.dangKyThanhVien(2, "Trương Vô Kỵ", "0912345678");
tvien.dangKyThanhVien(3, "Triệu Mẫn", "0923456789");

tvien.hienThanhVien();

tvien.khoaThanhVien(2);

tvien.hienThanhVien();
