
AFRAME.registerComponent('terreno-movel', {
    init: function () {
        this.tex = null;

        this.el.addEventListener('materialtextureloaded', () => {
            this.tex = this.el.getObject3D('mesh').material.map;

            this.tex.wrapS = THREE.RepeatWrapping;
            this.tex.wrapT = THREE.RepeatWrapping;

            this.tex.repeat.set(20, 40);
        });
    },

    tick: function (time, deltaTime) {
        if (this.tex) {
            this.tex.offset.y += deltaTime * 0.0005;
        }
    }
});
