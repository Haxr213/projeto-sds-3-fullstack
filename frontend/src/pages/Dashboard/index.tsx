import Barchart from "components/BarChart";
import DataTable from "components/DataTable";
import Donutchart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary" >Taxa de Sucesso (%)</h5>
                        <Barchart />
                    </div>
                    <div className="col-sm-6">
                        <h5>Taxa de Sucesso (%)</h5>
                        <Donutchart />

                    </div>
                </div>

                <div className='py-3'>
                    <h2 className='text-primary'>Todas as Vendas</h2>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;