import style from "../../App.module.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const grafico = [{name: 'Adrian', uv: 1.90, amt: 2}, {name: 'Lorena', uv: 1.72, amt: 2}, {name: 'Yasmin', uv: 1.65, amt: 2}, {name: 'Marcio', uv: 1.95, amt: 2}, {name: 'Flavia', uv: 1.68, amt: 2}, {name: 'Vô', uv: 1.78, amt: 2}];
  const grafico2 = [{name: 'Adrian', uv: 18, amt: 100}, {name: 'Lorena', uv: 19, amt: 100}, {name: 'Yasmin', uv: 15, amt: 100}, {name: 'Marcio', uv: 55, amt: 100}, {name: 'Flavia', uv: 46, amt: 100}, {name: 'Vô', uv: 82, amt: 100}];

export const Graph = () => {
    return (
        <>
            <h2>Graficos</h2>
          <div className={style.organizar}>
              <div className={style.centrelizarr}>
                <h3>Altura</h3>
                <LineChart width={500} height={300} data={grafico}>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </div>

              <div className={style.centrelizarr}>
                <h3>Idade</h3>
                <LineChart width={500} height={300} data={grafico2}>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </div>
              {/* <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                <div>👽</div>
              </Tilt> */}
          </div>
        </>
    )
}