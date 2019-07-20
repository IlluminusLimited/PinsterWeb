import React from 'react';
import LoaderSpinner from '../utility/LoaderSpinner';
import SvgPanda from '../utility/svg/SvgPanda';
import SvgAdd from '../utility/svg/SvgAdd';
import SvgAngleLeft from '../utility/svg/SvgAngleLeft';
import SvgClose from '../utility/svg/SvgClose';
import SvgCollection from '../utility/svg/SvgCollection';
import SvgEllipse from '../utility/svg/SvgEllipse';
import SvgHome from '../utility/svg/SvgHome';
import SvgMinus from '../utility/svg/SvgMinus';
import SvgPlus from '../utility/svg/SvgPlus';
import SvgProfile from '../utility/svg/SvgProfile';
import SvgSearch from '../utility/svg/SvgSearch';
import SvgSettings from '../utility/svg/SvgSettings';

const Styleguide = () => {
  return (
    <React.Fragment>
      <section>
        <h1>This is an H1</h1>
        <h2 className="with-divider copy-turquoise">This is a Heading</h2>
        <p>
          Amet nulla quo doloribus earum voluptas. Earum sed{' '}
          <a href="#test-link">doloremque blanditiis commodi</a> in? Mollitia doloremque cupiditate
          quae iure dolor! Possimus voluptate placeat eveniet eveniet ex tempore quis? Incidunt
          placeat distinctio sint Ipsum iste voluptas sit enim cumque, atque Animi quidem odit nisi
          corrupti quidem A dolores esse nostrum est deleniti Blanditiis vero error corporis earum
          placeat Excepturi quasi ducimus saepe ipsam? Dolor{' '}
          <a href="#test-link">voluptas corporis dicta nisi</a> aut? Itaque error rem mollitia alias
          quae? Exercitationem fuga praesentium architecto vero illum Quia necessitatibus quas autem
          quasi odit. Facere laborum labore hic veritatis non.
        </p>

        <h3 className="with-divider copy-salmon">Another heading</h3>
        <p>
          Amet repudiandae <a href="#test-link">aliquid ullam eligendi laborum ducimus</a>{' '}
          temporibus odit. Aut exercitationem dolores dolores vero deserunt Porro aliquam adipisci
          dolorem adipisci officiis Sit quam doloremque quam blanditiis cupiditate! Aliquam maiores
          quis? Amet dolorum quia voluptas facilis iure quae. Esse est nulla ipsam minus mollitia.
          Pariatur ratione eaque molestias quas maiores odit. Soluta nihil numquam totam ducimus
          hic, repellat consectetur reprehenderit. Earum Dolor repellat libero optio odit reiciendis
          ipsum? Obcaecati provident possimus eos ducimus harum. Aperiam aliquam eius accusamus
          officia repudiandae qui. Unde tempora sapiente quae et iure tempore Obcaecati repudiandae
          veniam.
        </p>

        <LoaderSpinner />
      </section>

      <section>
        <h4>Icons with example color overrides:</h4>

        <SvgAdd classList="salmon" />
        <SvgAngleLeft />
        <SvgClose />
        <SvgCollection classList="purple" />
        <SvgEllipse />
        <SvgHome />
        <SvgMinus />
        <SvgPanda />
        <SvgPlus classList="yellow" />
        <SvgProfile />
        <SvgSearch />
        <SvgSettings />
      </section>
    </React.Fragment>
  );
};

export default Styleguide;
