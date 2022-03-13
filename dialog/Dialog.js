window.addEventListener('DOMContentLoaded', function () {
    class Dialog {
        constructor($root, options = {}) {
            this.$root = $root
            this.bind()
            this.onCancel = options.onCancel || function () { }
            this.onOk = options.onOk || function () { }
        }
        bind() {
            let self = this
            this.$root.previousElementSibling.onclick = function () {
                self.show()

            }
            this.$root.querySelector('.close').onclick = function () {
                self.hide()
                self.onCancel()
            }
            this.$root.querySelector('.btn-cancel').onclick = function () {
                self.hide()
                self.onCancel()
            }
            this.$root.querySelector('.btn-ok').onclick = function () {
                self.hide()
                self.onOk()
            }
        }
        hide() {
            this.$root.classList.remove('appear')
            setTimeout(() => { this.$root.classList.remove('show') }, 400)
        }
        show() {
            this.$root.classList.add('show')
            setTimeout(() => { this.$root.classList.add('appear') })
        }
    }
    new Dialog(document.querySelectorAll('.dialog')[0], {
        onOk() {
            console.log('用户点了ok')
        },
        onCancel() {
            console.log('用户点了取消')
        }
    })
    new Dialog(document.querySelectorAll('.dialog')[1], {
        onOk() {
            console.log('用户点了ok')
        },
        onCancel() {
            console.log('用户点了取消')
        }
    })
})