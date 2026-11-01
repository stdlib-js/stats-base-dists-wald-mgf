<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Wald][wald-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [Wald][wald-distribution] random variable is

<!-- <equation class="equation" label="eq:wald_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \exp\left[\frac{\lambda}{\mu}\left(1-\sqrt{1-\frac{2\mu^2 t}{\lambda}}\right)\right]" alt="Moment-generating function (MGF) for a Wald distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \exp\left[\frac{\lambda}{\mu}\left(1-\sqrt{1-\frac{2\mu^2 t}{\lambda}}\right)\right]
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \exp\left[\frac{\lambda}{\mu}\left(1-\sqrt{1-\frac{2\mu^2 t}{\lambda}}\right)\right]" data-equation="eq:wald_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@2c32eb273fa95e2fd832845e12f129c4a07d2741/lib/node_modules/@stdlib/stats/base/dists/wald/mgf/docs/img/equation_wald_mgf_function.svg" alt="Moment-generating function (MGF) for a Wald distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu > 0` is the mean and `lambda > 0` is the shape parameter. The MGF is defined for `t <= lambda / (2 * mu^2)`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-wald-mgf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-wald-mgf@deno/mod.js';
```

#### mgf( t, mu, lambda )

Evaluates the [moment-generating function][mgf] (MGF) for a [Wald][wald-distribution] distribution with parameters `mu` (mean) and `lambda` (shape parameter).

```javascript
var y = mgf( 0.1, 2.0, 3.0 );
// returns ~1.2405

y = mgf( -1.0, 0.5, 2.0 );
// returns ~0.6237
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.5, 2.0 );
// returns NaN

y = mgf( 0.1, NaN, 2.0 );
// returns NaN

y = mgf( 0.1, 0.5, NaN );
// returns NaN
```

If provided `mu <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.1, -1.0, 2.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.1, 0.5, -2.0 );
// returns NaN
```

If provided `t > lambda / (2 * mu^2)`, the function returns `NaN`.

```javascript
var y = mgf( 1.0, 2.0, 3.0 );
// returns NaN
```

#### mgf.factory( mu, lambda )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [Wald][wald-distribution] distribution with parameters `mu` and `lambda`.

```javascript
var mymgf = mgf.factory( 2.0, 3.0 );

var y = mymgf( 0.1 );
// returns ~1.2405

y = mymgf( 0.2 );
// returns ~1.6085
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-wald-mgf@deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var lambda = uniform( 10, 50.0, 100.0, opts );
var mu = uniform( 10, 0.1, 2.0, opts );
var t = uniform( 10, -5.0, 5.0, opts );

logEachMap( 't: %0.4f, µ: %0.4f, λ: %0.4f, M_X(t;µ,λ): %0.4f', t, mu, lambda, mgf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-wald-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-wald-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-wald-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-wald-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-wald-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-wald-mgf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-wald-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-wald-mgf/main/LICENSE

[wald-distribution]: https://en.wikipedia.org/wiki/Inverse_Gaussian_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
