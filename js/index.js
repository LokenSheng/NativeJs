var drawingBoard = {
    cans: document.getElementById('cans'),
    ctx: document.getElementById('cans').getContext('2d'),
    btn_container: document.getElementsByTagName('ul')[0],
    bool: false,
    colorBtn: document.getElementById('color-change'),
    lineRuler: document.getElementById('line-ruler'),
    imgsArr: [],

    init: function () {
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.drawing();
        this.btnAllFn();
    },

    drawing: function () {
        var self = this,
            cans = this.cans,
            c_left = cans.offsetLeft,
            c_top = cans.offsetTop;
        this.cans.onmousedown = function (e) {
            self.bool = true;
            var c_x = e.pageX - c_left,
                c_y = e.pageY - c_top;
            self.ctx.beginPath();
            self.ctx.moveTo(c_x, c_y);

            var img = self.ctx.getImageData(0, 0, self.ctx.offsetWidth, self.ctx.offsetHeight);
            self.imgsArr.push(img);
        }
        this.cans.onmousemove = function (e) {
            if (self.bool) {
                self.ctx.lineTo(e.pageX - c_left, e.pageY - c_top);
                self.ctx.stroke();
            }
        }
        this.cans.onmouseup = function () {
            self.ctx.closePath();
            self.bool = false;
        }
    },

    btnAllFn: function () {
        var self = this;
        this.btn_container.onclick = function (e) {
            switch (e.target.id) {
                case 'clean-board':
                    self.ctx.clearRect(0, 0, self.cans.offsetWidth, self.cans.offsetHeight);
                    break
                case 'eraser':
                    self.ctx.strokeStyle = '#fff';
                    break
                case 'rescind':
                    if(self.imgsArr.length > 0){
                        self.ctx.putImageData(self.imgsArr.pop(),0,0); 
                    }
                    break
            }

        }
        this.colorBtn.onchange = function () {
            self.ctx.strokeStyle = this.value;
        }
        this.lineRuler.onchange = function (){
            self.ctx.lineWidth = this.value;
        }
    }
}

drawingBoard.init();

