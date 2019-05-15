export class Application {
    objects: Array<any>
    scene: any
    camera: any
    renderer: any
    three: any
    constructor(three: any) {
        this.objects = []
        this.three = three
        this.createScene(three)
    }

    static create(three: any){
        return new Application(three)
    }

    createScene(three: any) {
        this.scene = new three.Scene()
        this.camera = new three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000)
        this.camera.position.z = 60

        this.renderer = new three.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)

        this.render()
    }

    render() {
        requestAnimationFrame(() => {
            this.render()
        })

        this.objects.forEach((object) => {
            object.update()
        })

        this.renderer.render(this.scene, this.camera)
    }

    add(mesh: any) {
        this.objects.push(mesh)
        this.scene.add(mesh.getMesh())
        console.log(this.objects);
    }
}