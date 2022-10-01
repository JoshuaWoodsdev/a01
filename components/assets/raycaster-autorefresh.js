AFRAME.registerComponent('raycaster-autorefresh', {
    init: function () {
        var el = this.el;
        this.el.addEventListener('model-loaded', function () {
            var cursorEl = el.querySelector('[raycaster]');
            cursorEl.components.raycaster.refreshObjects();
        });
    }
});

//Custom components have to be registered by calling AFRAME.registerComponent() 