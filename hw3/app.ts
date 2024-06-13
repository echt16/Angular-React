abstract class Transport {
    abstract getInfo(): string;
    abstract showInfo(): void;
    private _type: string;
    public get type(): string {
        return this._type;
    }

    constructor(type: string) {
        this._type = type;
    }
}

abstract class AirTransport extends Transport {
    private _maxFlightAltitude: number;
    public get maxFlightAltitude(): number {
        return this._maxFlightAltitude;
    }
    constructor(maxFlightAltitude: number) {
        super("air transport");
        this._maxFlightAltitude = maxFlightAltitude;
    }
}

abstract class GroundTransport extends Transport {
    private _maxSpeed: number;
    public get maxSpeed(): number {
        return this._maxSpeed;
    }
    constructor(maxSpeed: number) {
        super("ground transport");
        this._maxSpeed = maxSpeed;
    }
}

abstract class WaterTransport extends Transport {
    private _maxTimeOnWater: number;
    public get maxTimeOnWater(): number {
        return this._maxTimeOnWater;
    }
    constructor(maxTimeOnWater: number) {
        super("water transport");
        this._maxTimeOnWater = maxTimeOnWater;
    }
}

class Airplane extends AirTransport {
    private _model: string;

    constructor(model: string, maxFlightAltitude: number) {
        super(maxFlightAltitude);
        this._model = model;
    }

    public getInfo(): string {
        return `Airplane Model: ${this._model}, Max Flight Altitude: ${this.maxFlightAltitude}`;
    }

    public showInfo(): void {
        console.log(this.getInfo());
    }
}

class Helicopter extends AirTransport {
    private _model: string;

    constructor(model: string, maxFlightAltitude: number) {
        super(maxFlightAltitude);
        this._model = model;
    }

    public getInfo(): string {
        return `Helicopter Model: ${this._model}, Max Flight Altitude: ${this.maxFlightAltitude}`;
    }

    public showInfo(): void {
        console.log(this.getInfo());
    }
}

class Car extends GroundTransport {
    private _model: string;

    constructor(model: string, maxSpeed: number) {
        super(maxSpeed);
        this._model = model;
    }

    public getInfo(): string {
        return `Car Model: ${this._model}, Max Speed: ${this.maxSpeed}`;
    }

    public showInfo(): void {
        console.log(this.getInfo());
    }
}

class Motorcycle extends GroundTransport {
    private _model: string;

    constructor(model: string, maxSpeed: number) {
        super(maxSpeed);
        this._model = model;
    }

    public getInfo(): string {
        return `Motorcycle Model: ${this._model}, Max Speed: ${this.maxSpeed}`;
    }

    public showInfo(): void {
        console.log(this.getInfo());
    }
}

class Boat extends WaterTransport {
    private _model: string;

    constructor(model: string, maxTimeOnWater: number) {
        super(maxTimeOnWater);
        this._model = model;
    }

    public getInfo(): string {
        return `Boat Model: ${this._model}, Max Time On Water: ${this.maxTimeOnWater}`;
    }

    public showInfo(): void {
        console.log(this.getInfo());
    }
}

class Submarine extends WaterTransport {
    private _model: string;

    constructor(model: string, maxTimeOnWater: number) {
        super(maxTimeOnWater);
        this._model = model;
    }

    public getInfo(): string {
        return `Submarine Model: ${this._model}, Max Time On Water: ${this.maxTimeOnWater}`;
    }

    public showInfo(): void {
        console.log(this.getInfo());
    }
}

const airplane1 = new Airplane("Boeing 737", 35000);
const airplane2 = new Airplane("Airbus A320", 37000);
const helicopter1 = new Helicopter("Bell 206", 15000);
const helicopter2 = new Helicopter("Sikorsky S-76", 14000);

const car1 = new Car("Tesla Model S", 200);
const car2 = new Car("BMW M3", 250);
const motorcycle1 = new Motorcycle("Harley-Davidson", 180);
const motorcycle2 = new Motorcycle("Ducati Panigale", 300);

const boat1 = new Boat("Yamaha 242X", 6);
const boat2 = new Boat("Bayliner Element E18", 8);
const submarine1 = new Submarine("Typhoon", 90);
const submarine2 = new Submarine("Seawolf", 120);

const transports: Transport[] = [
    airplane1, airplane2,
    helicopter1, helicopter2,
    car1, car2,
    motorcycle1, motorcycle2,
    boat1, boat2,
    submarine1, submarine2
];

for (const transport of transports) {
    transport.showInfo();
}