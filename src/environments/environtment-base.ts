export class EnvirontmentBase {
}
export class Environment {
    env: string;
    dns: string;
    baseUrl: string;
    production: boolean;
    msPoints: MicroService[];

    constructor(env: string, dns: string, baseUrl: string, production: boolean, endPoints: MicroService[]) {
        this.env = env;
        this.dns = dns;
        this.baseUrl = baseUrl;
        this.msPoints = endPoints;
    }
}

export class MicroService {
    msName: string;
    basePath: string;
    endPoints: EndPoint[];
    constructor(msName: string, basePath: string, endPoints: EndPoint[]) {
        this.msName = msName;
        this.basePath = basePath;
        this.endPoints = endPoints;
    }
}

export class EndPoint {
    apiName: string;
    path: string;
    constructor(apiName: string, path: string) {
        this.apiName = apiName;
        this.path = path;
    }
}
