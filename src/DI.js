function camelCase(name) {
  const [x, ...xs] = Array.from(name);
  return [x.toLowerCase(), ...xs].join("");
}

export class DI {
  instances = {};

  add(services) {
    for (const [name, Service] of Object.entries(services)) {
      this.instances[camelCase(name)] =
        typeof Service === "function" ? new Service(this.instances) : Service;
    }

    return this;
  }
}
