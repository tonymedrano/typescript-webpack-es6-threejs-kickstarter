export class Cube {
    geometry: any
    material: any
    mesh: any
    constructor(three: any, size: any, material: any) {
        this.geometry = new three.BoxGeometry(size.width, size.height, size.depth)
        this.material = new three.MeshBasicMaterial({
            map: three.ImageUtils.loadTexture(material)
        })

        this.mesh = new three.Mesh(this.geometry, this.material)
    }

    static create(three: any, size: any, material: any = 'wood.jpg'){
        return new Cube(three, size, material)
    }

    update() {
        this.mesh.rotation.x += 0.01
        this.mesh.rotation.y += 0.01
    }

    getMesh() {
        return this.mesh
    }
}