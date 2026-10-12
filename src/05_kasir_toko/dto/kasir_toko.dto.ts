import { IsArray, IsNotEmpty, IsNumber } from "class-validator";


class item {
    @IsNotEmpty()
    name :string;

    @IsNumber()
    harga: number;

    @IsNumber()
    qty: number
}

