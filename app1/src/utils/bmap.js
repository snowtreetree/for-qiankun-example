
export const loadBmap = () => {
    return new Promise((resolve, reject) => {
      var script = document.createElement('script');
        script.onload = () => {
            setTimeout(() => {
                resolve()
            }, 1000);
           
        };
      script.src =
        'http://api.map.baidu.com/api?v=2.0&ak=UbzYTGRVm6u3DwqmRMlhh2C2MZuyVkHC&callback=initialize';
      document.body.appendChild(script);
     
    });
  };

