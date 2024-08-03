import { Helmet } from "react-helmet-async";
import styles from "../styles/BiographyPage.module.css";

const BiographyPage = () => {
  return (
    <>
      <Helmet>
        <title>Біографія | Biography - Юрій Шевченко | Yuri Shevchenko</title>
        <meta
          name="description"
          content="Біографія Юрія Шевченка, видатного українського композитора. Дізнайтесь про його життєвий шлях, нагороди та внесок у світову музику. 
          Biography of Yuri Shevchenko, an outstanding Ukrainian composer. Learn about his life journey, awards, and contributions to world music."
        />
      </Helmet>
      <div className="container">
        <div className={styles.biographyPage}>
          <div className={styles.textSection}>
            <h1>Юрій Валентинович Шевченко</h1>
            <p className={styles.importantDates}>1953 - 2022</p>

            <h2>Юрій Шевченко</h2>
            <p>
              Юрій Шевченко – видатний український композитор, Заслужений діяч
              мистецтв України та член-кореспондент Академії мистецтв України.
              Його творчий шлях відзначений численними нагородами, серед яких
              премії імені М. Вериківського (2007) та М. Лисенка (2012), а також
              дев’ять премій "Київська пектораль" (1993-2018).
            </p>

            <h2>Творчий шлях</h2>
            <p>
              Юрій Шевченко є автором численних симфонічних, камерних та хорових
              творів, музики до теле-радіо вистав, художніх і анімаційних
              фільмів, а також естрадних пісень. Його музика для театру – це
              справжній культурний скарб. Юрій написав музику для понад 100
              театральних вистав, співпрацюючи з провідними театрами України.
            </p>
            <p>
              На сцені Національної опери України були поставлені його балети
              "Буратіно та Чарівна Скрипка" (2007, нині "Пригоди Піноккіо"), "За
              двома зайцями" (2017) та опера "Кіт у чоботях" (2023). Крім того,
              його балети "Бармалей та Айболить" (2009) та опера "Король
              Дроздобород" (2018) стали популярними в Київському муніципальному
              академічному театрі опери і балету для дітей та юнацтва.
            </p>

            <h2>Міжнародна діяльність</h2>
            <p>
              Юрій Шевченко плідно співпрацював з канадським танцювальним
              колективом "Шумка" з Едмонтона. Для цього колективу він створив
              балети "Катруся", "Перун", "Сіндерела" та фольклорну сюїту "Пори
              року", які сприяли успіху концертних турів по Канаді, США та
              Китаю. Балет "Те, що приніс вітер" (балетмейстер В. Литвинов) з
              успіхом був представлений на міжнародному фестивалі сучасної
              хореографії в Оттаві. У 2016 році відбулася прем'єра їхньої
              спільної роботи - кантати-балету "Кобзар".
            </p>

            <h2>Особисте життя та спадок</h2>
            <p>
              Юрій Шевченко був не лише талановитим композитором, але й людиною
              з глибоким розумінням театрального мистецтва. Його музика наповнює
              душі слухачів любов’ю, добром і світлом. Він завжди був присутній
              на репетиціях своїх творів, надаючи виконавцям підтримку та
              натхнення.
            </p>
            <p>
              Шевченко залишив багатий музичний спадок, який збагатив українську
              та світову музичну культуру. Його творчість відзначається яскравим
              мелодизмом, насиченою тембральною колористикою та оптимістичним
              світосприйняттям. Музика Юрія Шевченка залишається важливим
              джерелом натхнення для багатьох поколінь митців і слухачів.
            </p>
          </div>
          <div className={styles.imageSection}>
            <img
              className={styles.photo}
              src="/images/Textura+.jpg"
              alt="Композитор"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BiographyPage;
