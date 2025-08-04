document.addEventListener("mousemove", parallax);
        function parallax(event){
            this.querySelectorAll(".navcontent").forEach((shift) => {
                const position = shift.getAttribute("value");
                const x = (event.pageX * position) / 90;
                const y = (event.pageY * position) / 90;

                shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }