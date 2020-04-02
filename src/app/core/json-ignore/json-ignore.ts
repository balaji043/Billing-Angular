const IGNORE_FIELDS = new Map<string, string[]>();
function JsonIgnore(cls: any, name: string) {
    const clsName = cls.constructor.name;
    let list: string[];

    if (IGNORE_FIELDS.has(clsName)) {
        list = IGNORE_FIELDS.get(clsName);
    } else {
        list = [];
        IGNORE_FIELDS.set(clsName, list);
    }

    list.push(name);
}

class Base {
    toJson(): { [name: string]: any } {
        const json = {};
        const ignore = IGNORE_FIELDS.get(this.constructor.name);

        Object.getOwnPropertyNames(this).filter(name => ignore.indexOf(name) < 0).forEach(name => {
            json[name] = this[name];
        });

        return json;
    }
}
