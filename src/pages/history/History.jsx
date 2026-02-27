import Header from "../../components/header/Header";
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";
import "./History.css";

function History() {
    const { language } = useLanguage();
const t = translations[language];
    return (
        <div className="history">
            <Header />
            <div className="history-content">
                <h1 className="history-title">Historia del Frutiger Aero</h1>
                <p className="history-text">El Frutiger Aero es una estética digital popular entre 2004 y 2012 que combinó el optimismo tecnológico con la naturaleza, caracterizándose por texturas brillantes (esqueuomorfismo), transparencias, colores azules/verdes, burbujas y motivos acuáticos. Su nombre proviene de la tipografía Frutiger y el tema de interfaz Windows Aero.</p>

                <h2 className="history-subtitle">Orígenes e Influencias</h2>
                <p className="history-text">La corriente surge de la mezcla del diseño esqueleomórfico de principios de los 2000 y el auge del diseño de interfaces de Microsoft y Apple. El nombre rinde homenaje al diseñador suizo Adrian Frutiger, conocido por tipografías de alta legibilidad.</p>

                <h2 className="history-subtitle">Características Visuales</h2>
                <p className="history-text">Escenas utópicas, tecnología brillante, apariencia de cristal pulido, agua, burbujas, cielos despejados y vegetación, a menudo descritos bajo el estilo "Web 2.0 Gloss".</p>

                <h2 className="history-subtitle">Era y Auge</h2>
                <p className="history-text">Su apogeo ocurrió entre el lanzamiento de Windows Vista (2006) y el auge del diseño plano, influyendo en consolas como Wii, publicidad y software de la época.</p>

                <h2 className="history-subtitle">Declive y Legado</h2>
                <p className="history-text">A partir de 2010-2013, fue reemplazado por el flat design, marcando el fin de esta etapa. Hoy es considerada una estética nostálgica de principios de siglo.</p>
            </div>
        </div>
    );
}

export default History;