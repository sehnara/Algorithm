window.onload = function(){
                const diplay = document.querySelector('h1');
                const arr1 = [2,3,4,8,6];
                func1(arr1);

                function func1(arr){
                    diplay.innerHTML = arrSum(arr);

                    function arrSum(a){
                        let sum = 0;

                        for (let i = 0; i < a.length; i++) {
                            sum +=(arr[i])*(a[i]);
                        }
                        return Math.sqrt(sum);  
                    }
                }
            }