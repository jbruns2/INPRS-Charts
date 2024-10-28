let myChart = document.getElementById("myChart").getContext('2d');

            let thisChart = new Chart(myChart, {
                type: 'bar',
                data:{
                    labels: ['This', 'That', 'Another', 'Also'],
                    datasets: [{
                        label: 'Population',
                        data: [
                            25546,
                            4484,
                            22697,
                            6502
                        ],
                        backgroundColor: [
                            'rgba(8, 103, 136, 1)',
                            'rgba(7, 160, 195, 1)',
                            'rgba(240, 200, 8, 1)',
                            'rgba(221, 28, 26, 1)', 
                            'rgba(255, 241, 208, 1)'
                        ],
                        borderWidth: 6,
                        borderColor: '777'
                    }]
                },
                options:{
                    indexAxis: 'y',
                    scales: {
                        y: {
                            ticks: {
                                crossAlign: 'far',
                            }
                        }
                    }
                }
            });