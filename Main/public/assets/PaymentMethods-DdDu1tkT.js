import { j as i, S as E, b as h, t as p, r as v } from './app-DV9Enp-g.js';
import { F as P, a as A } from './formik.esm-57hcKfmx.js';
import { z as D } from './index-CuMLbxmh.js';
import { F as N } from './FieldRenderer-pV4OD7Lm.js';
import { c as V, a as o } from './index.esm-DH7tFHsH.js';
import { u as f } from './useTranslation-B_tqir3M.js';
import { B as x } from './input-BY0aN3Wh.js';
import { F as w } from './form-label-BRtD5jpz.js';
import { B as _ } from './_rollupPluginBabelHelpers-3bc641ae-fORsOdMW.js';
import { L as y } from './Layout-4Yl3SVGs.js';
import { T as S, a as F, b as T, c as L, d as k } from './tab-panels-vLnb1L73.js';
import { F as B } from './platform_roles-C6HFwJ_S.js';
import './popover-trigger-bCcTHQgY.js';
import './ArrowDown2-BYk1CnSd.js';
import './popover-body-Dv7tL-tk.js';
import './format-DNgEHVKA.js';
import './index-DOaWT0nF.js';
import './use-radio-6sqGZ21b.js';
import './visually-hidden.style-Bfr07Aua.js';
import './radio-BkVBa4kL.js';
import './textarea-7dmbfoGY.js';
import './Clock-DOUKTfsE.js';
import './ProfileCircle-kDGWjsR6.js';
import './accordion-panel-Bmo1-bWf.js';
const q = V().shape({
  name: o().required('Name is required'),
  public: o().optional(),
  secret: o().optional(),
  mode: o().optional(),
  webhook: o().optional(),
});
function I({ isLoading: n, paymentMethod: e, refresh: t }) {
  var u;
  const { t: l } = f(),
    r = e == null ? void 0 : e.config;
  let d = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Name of the payment method' },
  ];
  return (
    (d = [
      ...d,
      ...((u = r == null ? void 0 : r.fields) == null
        ? void 0
        : u.map((s) => ({
            name: s.name,
            label: s.label,
            type: s.type,
            placeholder: s.label,
            options: s.options,
            items: s.items,
          }))),
      {
        name: 'status',
        label: 'Status',
        type: 'radio_group',
        options: [
          { label: 'Active', value: '1' },
          { label: 'Inactive', value: '0' },
        ],
      },
    ]),
    n
      ? i.jsxDEV(
          x,
          {
            className:
              'p-6 py-30 rounded-md flex flex-col items-center space-y-4 max-w-[730px] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)]',
            children: i.jsxDEV(
              E,
              {},
              void 0,
              !1,
              {
                fileName: 'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                lineNumber: 71,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          !1,
          {
            fileName: 'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
            lineNumber: 70,
            columnNumber: 7,
          },
          this
        )
      : i.jsxDEV(
          'div',
          {
            children: i.jsxDEV(
              P,
              {
                initialValues: {
                  name: (e == null ? void 0 : e.name) || '',
                  public: (e == null ? void 0 : e.public) || '',
                  secret: (e == null ? void 0 : e.secret) || '',
                  mode: (e == null ? void 0 : e.mode) || '',
                  webhook: (e == null ? void 0 : e.webhook) || '',
                  status: e != null && e.status ? '1' : '0',
                },
                onSubmit: async (s, m) => {
                  try {
                    m.setSubmitting(!0);
                    const { data: a } = await h.put(
                      '/api/payment-methods/' + (e == null ? void 0 : e.id),
                      s
                    );
                    a != null && a.success && (p.success(a.message), t == null || t());
                  } catch (a) {
                    p.error(l(a.response.data.message) || l('Something went wrong'));
                  } finally {
                    m.setSubmitting(!1);
                  }
                },
                validationSchema: q,
                children: ({ isSubmitting: s }) =>
                  i.jsxDEV(
                    'div',
                    {
                      className: 'flex flex-col gap-4 @container',
                      children: i.jsxDEV(
                        A,
                        {
                          className: 'w-full grid grid-cols-1 @3xl:grid-cols-2 gap-4',
                          children: i.jsxDEV(
                            'div',
                            {
                              className: 'col-span-1',
                              children: i.jsxDEV(
                                x,
                                {
                                  rounded: '6px',
                                  className:
                                    'p-6 py-4 flex flex-col items-center space-y-4 bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)]',
                                  children: [
                                    i.jsxDEV(
                                      'div',
                                      {
                                        className: 'w-full flex flex-col items-stretch space-y-4',
                                        children: d.map((m, a) =>
                                          D(m)
                                            .with({ type: 'group' }, (c) => {
                                              var b;
                                              return i.jsxDEV(
                                                v.Fragment,
                                                {
                                                  children: i.jsxDEV(
                                                    'div',
                                                    {
                                                      className: 'w-full',
                                                      children: [
                                                        i.jsxDEV(
                                                          w,
                                                          {
                                                            className: 'text-sm text-secondary-800',
                                                            children: c.label,
                                                          },
                                                          void 0,
                                                          !1,
                                                          {
                                                            fileName:
                                                              'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                                            lineNumber: 121,
                                                            columnNumber: 31,
                                                          },
                                                          this
                                                        ),
                                                        i.jsxDEV(
                                                          'div',
                                                          {
                                                            className: 'flex flex-col gap-2',
                                                            children:
                                                              (b = c.items) == null
                                                                ? void 0
                                                                : b.map((g, j) =>
                                                                    i.jsxDEV(
                                                                      N,
                                                                      { ...g },
                                                                      j,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                                                        lineNumber: 126,
                                                                        columnNumber: 35,
                                                                      },
                                                                      this
                                                                    )
                                                                  ),
                                                          },
                                                          void 0,
                                                          !1,
                                                          {
                                                            fileName:
                                                              'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                                            lineNumber: 124,
                                                            columnNumber: 31,
                                                          },
                                                          this
                                                        ),
                                                      ],
                                                    },
                                                    void 0,
                                                    !0,
                                                    {
                                                      fileName:
                                                        'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                                      lineNumber: 120,
                                                      columnNumber: 29,
                                                    },
                                                    this
                                                  ),
                                                },
                                                a,
                                                !1,
                                                {
                                                  fileName:
                                                    'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                                  lineNumber: 119,
                                                  columnNumber: 27,
                                                },
                                                this
                                              );
                                            })
                                            .otherwise(
                                              () =>
                                                m.type !== 'group' &&
                                                m.name &&
                                                i.jsxDEV(
                                                  N,
                                                  { ...m },
                                                  a,
                                                  !1,
                                                  {
                                                    fileName:
                                                      'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                                    lineNumber: 137,
                                                    columnNumber: 43,
                                                  },
                                                  this
                                                )
                                            )
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                        lineNumber: 114,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    i.jsxDEV(
                                      _,
                                      {
                                        type: 'submit',
                                        isLoading: s,
                                        colorScheme: 'primary',
                                        className: 'w-fit bg-primary-400 self-start',
                                        children: l('Update'),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                        lineNumber: 142,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                                  lineNumber: 110,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                              lineNumber: 109,
                              columnNumber: 15,
                            },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                          lineNumber: 108,
                          columnNumber: 13,
                        },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                      lineNumber: 107,
                      columnNumber: 11,
                    },
                    this
                  ),
              },
              void 0,
              !1,
              {
                fileName: 'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
                lineNumber: 79,
                columnNumber: 7,
              },
              this
            ),
          },
          void 0,
          !1,
          {
            fileName: 'E:/abid/getpasto-adonisjs6/inertia/components/Admin/PaymentMethod.tsx',
            lineNumber: 78,
            columnNumber: 5,
          },
          this
        )
  );
}
const le = ({ data: n }) => {
  const { t: e } = f();
  return i.jsxDEV(
    y,
    {
      title: e('Payment Methods'),
      children: i.jsxDEV(
        'div',
        {
          className: 'p-4 sm:p-6 relative',
          children: i.jsxDEV(
            S,
            {
              children: [
                i.jsxDEV(
                  B,
                  {
                    className: 'justify-between w-full overflow-x-auto',
                    children: i.jsxDEV(
                      F,
                      {
                        className: 'whitespace-nowrap',
                        children:
                          n == null
                            ? void 0
                            : n.map((t) =>
                                i.jsxDEV(
                                  T,
                                  { children: t.name },
                                  t.id,
                                  !1,
                                  {
                                    fileName:
                                      'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
                                    lineNumber: 34,
                                    columnNumber: 17,
                                  },
                                  void 0
                                )
                              ),
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
                        lineNumber: 32,
                        columnNumber: 13,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: 'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
                    lineNumber: 31,
                    columnNumber: 11,
                  },
                  void 0
                ),
                i.jsxDEV(
                  L,
                  {
                    children:
                      n == null
                        ? void 0
                        : n.map((t) =>
                            i.jsxDEV(
                              k,
                              {
                                children: i.jsxDEV(
                                  I,
                                  { paymentMethod: t },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
                                    lineNumber: 42,
                                    columnNumber: 19,
                                  },
                                  void 0
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
                                lineNumber: 41,
                                columnNumber: 17,
                              },
                              void 0
                            )
                          ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: 'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
                    lineNumber: 39,
                    columnNumber: 11,
                  },
                  void 0
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: 'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
              lineNumber: 30,
              columnNumber: 9,
            },
            void 0
          ),
        },
        void 0,
        !1,
        {
          fileName: 'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
          lineNumber: 29,
          columnNumber: 7,
        },
        void 0
      ),
    },
    void 0,
    !1,
    {
      fileName: 'E:/abid/getpasto-adonisjs6/inertia/pages/Admin/PaymentMethods.tsx',
      lineNumber: 28,
      columnNumber: 5,
    },
    void 0
  );
};
export { le as default };
