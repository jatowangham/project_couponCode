        function loadCoupon() {
            document.getElementsByClassName('coupon')[0].style.display = 'block';
            document.querySelector('.search').style.opacity = "0.7";
        }

        const couponClose = () => {
            document.getElementsByClassName('coupon')[0].style.display = 'none'
            document.querySelector('.search').style.opacity = '1';
        }