const representativePublications = [
  { text: 'H. Diao and H. Liu, Spectral Geometry and Inverse Scattering Theory, Springer, Cham, 2023, ISBN 9783031346156.', href: 'https://doi.org/10.1007/978-3-031-34615-6' },
  { text: 'H. Diao, R. Tang, and H. Liu, On quasi-Minnaert resonances in elasticity and their applications to stress concentrations, SIAM J. Appl. Math., to appear, 2026.', href: 'https://arxiv.org/abs/2505.03534' },
  { text: 'H. Diao, Q. Meng, and Z. Sun, Effective medium theory for embedded sound-soft obstacles in an anisotropic inhomogeneous medium with applications, SIAM J. Appl. Math., to appear, 2026.', href: 'https://doi.org/10.1137/25M1738371' },
  { text: 'H. Diao, X. Fei, and H. Liu, Geometrical characterizations of radiating and non-radiating elastic sources and mediums with applications, J. Differential Equations 463 (2026), 114208, 35 pp.', href: 'https://doi.org/10.1016/j.jde.2026.114208' },
  { text: 'H. Diao, H. Liu, and Q. Meng, Dislocations with corners in an elastic body with applications to fault detection, SIAM J. Appl. Math. 85 (2025), no. 5, 2399–2424.', href: 'https://doi.org/10.1137/24M1710267' },
  { text: 'W. Zhou, H. Diao, and H. Liu, Quasi-Minnaert resonances in high-contrast acoustic structures and applications to invisibility cloaking, J. Comput. Phys. 541 (2025), 114310, 24 pp.', href: 'https://doi.org/10.1016/j.jcp.2025.114310' },
  { text: 'H. Diao, Y. Geng, and R. Tang, Non-radiating elastic sources in inhomogeneous elastic media at corners with applications, Inverse Problems 41 (2025), no. 8, 085013, 27 pp.', href: 'https://doi.org/10.1088/1361-6420/adfc90' },
  { text: 'H. Diao, X. Fei, and H. Liu, On a novel unique continuation principle result and its application to inverse conductive scattering, SIAM J. Math. Anal. 57 (2025), no. 3, 3386–3421.', href: 'https://doi.org/10.1137/24M1704762' },
  { text: 'H. Diao, H. Liu, Q. Meng, and L. Wang, On a coupled-physics transmission eigenvalue problem and its spectral properties with applications, J. Differential Equations 441 (2025), 113508, 39 pp.', href: 'https://doi.org/10.1016/j.jde.2025.113508' },
  { text: 'H. Diao, X. Fei, and H. Liu, Local geometric properties of conductive transmission eigenfunctions and applications, European J. Appl. Math. 36 (2025), no. 3, 538–569.', href: 'https://doi.org/10.1017/S0956792524000287' },
  { text: 'H. Diao, X. Fei, H. Liu, and L. Wang, Determining anomalies in a semilinear elliptic equation by a minimal number of measurements, Inverse Problems 41 (2025), no. 5, 055004, 28 pp.', href: 'https://doi.org/10.1088/1361-6420/adc82a' },
  { text: 'H. Diao, H. Liu, Q. Meng, and L. Wang, Effective medium theory for embedded obstacles in electromagnetic scattering with applications, J. Differential Equations 437 (2025), 113283, 34 pp.', href: 'https://doi.org/10.1016/j.jde.2025.113283' },
  { text: 'H. Diao, R. Tang, H. Liu, and J. Tang, Unique determination by a single far-field measurement for an inverse elastic problem, Inverse Probl. Imaging 18 (2024), no. 6, 1405–1430.', href: 'https://doi.org/10.3934/ipi.2024020' },
  { text: 'H. Diao, X. Fei, H. Liu, and K. Yang, Visibility, invisibility and unique recovery of inverse electromagnetic problems with conical singularities, Inverse Probl. Imaging 18 (2024), no. 3, 541–570.', href: 'https://doi.org/10.3934/ipi.2023043' },
  { text: 'H. Diao, H. Liu, and L. Tao, Stable determination of an impedance obstacle by a single far-field measurement, Inverse Problems 40 (2024), no. 5, 055005, 35 pp.', href: 'https://doi.org/10.1088/1361-6420/ad3087' },
  { text: 'H. Diao, H. Li, H. Liu, and J. Tang, Spectral properties of an acoustic-elastic transmission eigenvalue problem with applications, J. Differential Equations 371 (2023), 629–659.', href: 'https://doi.org/10.1016/j.jde.2023.07.002' },
  { text: 'H. Diao, X. Fei, H. Liu, and K. Yang, Visibility, invisibility and unique recovery of inverse electromagnetic problems with conical singularities, Inverse Probl. Imaging, doi:10.3934/ipi.2023043, 2023.', href: 'https://doi.org/10.3934/ipi.2023043' },
  { text: 'Z. Bai, H. Diao, H. Liu, and Q. Meng, Stable determination of an elastic medium scatterer by a single far-field measurement and beyond, Calc. Var. Partial Differential Equations 61 (2022), 170, 23 pp.', href: 'https://doi.org/10.1007/s00526-022-02278-5' },
  { text: 'X. Cao, H. Diao, H. Liu, and J. Zou, Two single-measurement uniqueness results for inverse scattering problems within polyhedral geometries, Inverse Probl. Imaging 16 (2022), no. 6, 1501–1528.', href: 'https://doi.org/10.3934/ipi.2022023' },
  { text: 'H. Diao, H. Liu, and L. Wang, Further results on generalized Holmgren’s principle to the Lamé operator and applications, J. Differential Equations 309 (2022), 841–882.', href: 'https://doi.org/10.1016/j.jde.2021.11.039' },
  { text: 'Q. Meng, Z. Bai, H. Diao, and H. Liu, Effective medium theory for embedded obstacles in elasticity with applications to inverse problems, SIAM J. Appl. Math. 82 (2022), no. 2, 720–749.', href: 'https://doi.org/10.1137/21M1431369' },
  { text: 'H. Diao, H. Liu, and B. Sun, On a local geometric structure of generalized elastic transmission eigenfunctions and application, Inverse Problems 37 (2021), 105015, 36 pp.', href: 'https://doi.org/10.1088/1361-6420/ac23c2' },
  { text: 'X. Cao, H. Diao, H. Liu, and J. Zou, On novel geometric structures of Laplacian eigenfunctions in R3 and applications to inverse problems, SIAM J. Math. Anal. 53 (2021), no. 2, 1263–1294.', href: 'https://doi.org/10.1137/19M1292989' },
  { text: 'H. Diao, H. Liu, L. Zhang, and J. Zou, Unique continuation from a generalized impedance edge-corner for Maxwell’s system and applications to inverse problems, Inverse Problems 37 (2021), 035004.', href: 'https://doi.org/10.1088/1361-6420/abdb42' },
  { text: 'Q. Meng, H. Diao, and Z. Bai, Condition numbers for the truncated total least squares problem and their estimations, Numer. Linear Algebra Appl. (2021), e2369.', href: 'https://doi.org/10.1002/nla.2369' },
  { text: 'H. Diao, X. Cao, and H. Liu, On the geometric structures of conductive transmission eigenfunctions and their application, Comm. Partial Differential Equations 46 (2021), no. 4, 630–679.', href: 'https://doi.org/10.1080/03605302.2020.1857397' },
  { text: 'X. Cao, H. Diao, H. Liu, and J. Zou, On nodal and generalized singular structures of Laplacian eigenfunctions and applications, J. Math. Pures Appl. 143 (2020), 116–161.', href: 'https://doi.org/10.1016/j.matpur.2020.09.011' },
  { text: 'H. Diao, H. Liu, and L. Wang, On generalized Holmgren’s principle to the Lamé operator with applications to inverse elastic problems, Calc. Var. Partial Differential Equations 59 (2020), 179.', href: 'https://doi.org/10.1007/s00526-020-01830-5' },
  { text: 'Q. Meng, H. Diao, and Q. Yu, Structured condition number for multi-right hands linear systems with parameterized quasiseparable coefficient matrix, J. Comput. Appl. Math. 368 (2020), 112527.', href: 'https://doi.org/10.1016/j.cam.2019.112527' },
  { text: 'H. Diao, Z. Song, D. P. Woodruff, and X. Yang, Total least squares regression in input sparsity time, Adv. Neural Inf. Process. Syst. 32 (2019), 2478–2489.', href: 'https://proceedings.neurips.cc/paper/2019/hash/540ae6b0f6ac6e155062f3dd4f0b2b01-Abstract.html' },
  { text: 'H. Diao, R. Jayaram, Z. Song, W. Sun, and D. P. Woodruff, Optimal sketching for Kronecker product regression and low rank approximation, Adv. Neural Inf. Process. Syst. 32 (2019), 4739–4750.', href: 'https://proceedings.neurips.cc/paper_files/paper/2019/hash/0c215f194276000be6a6df6528067151-Abstract.html' },
  { text: 'H. Diao and Q. Meng, Structured generalized eigenvalue condition numbers for parameterized quasiseparable matrices, BIT 59 (2019), 695–720.', href: 'https://doi.org/10.1007/s10543-019-00748-5' },
  { text: 'H. Diao, P. Li, and X. Yuan, Inverse elastic surface scattering with far-field data, Inverse Probl. Imaging 13 (2019), no. 4, 721–744.', href: 'https://doi.org/10.3934/ipi.2019033' },
  { text: 'H. Diao and Y. Sun, Mixed and componentwise condition numbers for a linear function of the solution of the total least squares problem, Linear Algebra Appl. 544 (2018), 1–29.', href: 'https://doi.org/10.1016/j.laa.2018.01.008' },
  { text: 'H. Diao, Condition numbers for a linear function of the solution of the linear least squares problem with equality constraints, J. Comput. Appl. Math. 344 (2018), 640–656.', href: 'https://doi.org/10.1016/j.cam.2018.05.050' },
  { text: 'H. Diao and J. Zhao, On structured componentwise condition numbers for Hamiltonian eigenvalue problems, J. Comput. Appl. Math. 335 (2018), 74–85.', href: 'https://doi.org/10.1016/j.cam.2017.11.039' },
  { text: 'H. Diao, L. Liang, and S. Qiao, A condition analysis of the weighted linear least squares problem using dual norms, Linear Multilinear Algebra 66 (2018), no. 6, 1085–1103.', href: 'https://doi.org/10.1080/03081087.2017.1337059' },
  { text: 'H. Diao, Y. Wei, and P. Xie, Small sample statistical condition estimation for the total least squares problem, Numer. Algorithms 75 (2017), no. 2, 435–455.', href: 'https://doi.org/10.1007/s11075-016-0185-9' },
  { text: 'H. Diao, On condition numbers for least squares with quadric inequality constraint, Comput. Math. Appl. 73 (2017), no. 4, 616–627.', href: 'https://doi.org/10.1016/j.camwa.2016.12.033' },
  { text: 'H. Diao, Y. Wei, and S. Qiao, Structured condition numbers of structured Tikhonov regularization problem and their estimations, J. Comput. Appl. Math. 308 (2016), 276–300.', href: 'https://doi.org/10.1016/j.cam.2016.05.023' },
  { text: 'H. Diao, X. Shi, and Y. Wei, Effective condition numbers and small sample statistical condition estimation for the generalized Sylvester equation, Sci. China Math. 56 (2013), no. 5, 967–982.', href: 'https://doi.org/10.1007/s11425-013-4583-3' },
  { text: 'H. Diao, W. Wang, Y. Wei, and S. Qiao, On condition numbers for Moore–Penrose inverse and linear least squares problem involving Kronecker products, Numer. Linear Algebra Appl. 20 (2013), no. 1, 44–59.', href: 'https://doi.org/10.1002/nla.1823' },
  { text: 'H. Diao, H. Xiang, and Y. Wei, Mixed, componentwise condition numbers and small sample statistical condition estimation of Sylvester equations, Numer. Linear Algebra Appl. 19 (2012), no. 4, 639–654.', href: 'https://doi.org/10.1002/nla.790' },
  { text: 'H. Diao, On componentwise condition numbers for eigenvalue problems with structured matrices, Numer. Linear Algebra Appl. 16 (2009), 87–107.', href: 'https://doi.org/10.1002/nla.607' },
  { text: 'H. Diao and Y. Wei, On Frobenius normwise condition numbers for Moore–Penrose inverse and linear least squares problems, Numer. Linear Algebra Appl. 14 (2007), 603–610.', href: 'https://doi.org/10.1002/nla.540' },
  { text: 'F. Cucker and H. Diao, Mixed and componentwise condition numbers for rectangular structured matrices, Calcolo 44 (2007), 89–115.', href: 'https://doi.org/10.1007/s10092-007-0130-3' },
  { text: 'F. Cucker, H. Diao, and Y. Wei, On mixed and componentwise condition numbers for Moore–Penrose inverse and linear least squares problems, Math. Comp. 76 (2007), 947–963.', href: 'https://doi.org/10.1090/S0025-5718-06-01913-2' },
  { text: 'F. Cucker, H. Diao, and Y. Wei, Smoothed analysis of some condition numbers, Numer. Linear Algebra Appl. 13 (2006), 71–84.', href: 'https://doi.org/10.1002/nla.464' }
];

export const siteContent = {
  zh: {
    htmlLang: 'zh-CN',
    nav: ['首页', '研究', '成果', '教学', '学生', '联系'],
    sectionTitles: {
      research: '研究方向',
      publications: '代表性成果',
      teaching: '教学',
      students: '学生',
      contact: '联系'
    },
    hero: {
      name: '刁怀安',
      nameEnglish: 'Huaian Diao',
      title: '吉林大学数学学院教授、博士生导师',
      subtitle: '研究方向包括数学物理反问题、波散射、谱理论与数值计算。',
      welcome: '欢迎对相关方向感兴趣的本科生和研究生联系交流。'
    },
    research: [
      {
        title: '数学物理反问题',
        body: '关注由有限测量恢复介质、源项和几何结构的理论与计算方法。'
      },
      {
        title: '波散射',
        body: '研究声学、弹性与电磁散射中的唯一性、稳定性与可见性问题。'
      },
      {
        title: '谱理论',
        body: '结合传输特征值、散射共振和相关谱性质开展分析。'
      },
      {
        title: '数值计算',
        body: '围绕矩阵计算、优化与偏微分方程数值方法开展研究。'
      }
    ],
    publications: representativePublications,
    teaching: {
      undergraduateTitle: '本科生课程',
      graduateTitle: '研究生课程',
      undergraduate: ['现代优化算法', '复变函数', '数值分析', '凸分析', '微分方程数值解', '离散数学', '线性代数A'],
      graduate: ['非线性问题数值解', '矩阵计算', '最优化计算', '微分方程差分方法']
    },
    students: {
      prospectiveTitle: '拟联系学生',
      opportunitiesTitle: '当前机会',
      outcomesTitle: '毕业生与学生发展',
      tableHeaders: ['姓名', '培养层次', '培养时间', '毕业去向'],
      prospective: [
        '欢迎希望开展科研训练、毕业设计或继续深造的本科生联系。',
        '欢迎具有扎实数学基础并希望申请硕士或博士阶段研究的同学联系。',
        '联系时建议附上简历、成绩单以及感兴趣的研究方向。'
      ],
      opportunities: [
        '可围绕反问题、波散射、谱理论和数值计算开展本科生科研训练。',
        '欢迎对理论分析与数值方法结合感兴趣的研究生申请者交流。'
      ],
      outcomes: [
        {
          name: '孟庆乐',
          level: '硕士',
          period: '2015.09-2018.06',
          destinations: [
            '厦门大学博士生（2018.09-2022.06）',
            '香港城市大学博士后（2022.09-2026.05）',
            '大连理工大学副教授（2026.06-至今）'
          ]
        },
        {
          name: '费晓旭',
          level: '硕士',
          period: '2019.09-2022.06',
          destinations: [
            '中南大学博士生（2022.09-2026.06）',
            '香港城市大学博士联合培养（2024.09-2026.06）'
          ]
        },
        {
          name: '王丽',
          level: '硕士',
          period: '2018.09-2021.06',
          destinations: [
            '香港浸会大学数学系研究助理（2021.09-2022.05）',
            '香港城市大学数学系博士研究生（2022.09-至今）'
          ]
        }
      ]
    },
    contact: {
      emailLabel: '电子邮箱',
      email: 'diao@jlu.edu.cn',
      officeLabel: '办公地点',
      office: '吉林大学中心校区伍卓群楼524',
      phoneLabel: '办公电话',
      phone: '0431-85166214',
      facultyPageLabel: '学院主页',
      facultyPageHref: 'https://math.jlu.edu.cn/info/1782/16720.htm',
      facultyPageText: '吉林大学数学学院教师主页'
    }
  },
  en: {
    htmlLang: 'en',
    nav: ['Home', 'Research', 'Publications', 'Teaching', 'Students', 'Contact'],
    sectionTitles: {
      research: 'Research',
      publications: 'Selected Publications',
      teaching: 'Teaching',
      students: 'Students',
      contact: 'Contact'
    },
    hero: {
      name: 'Huaian Diao',
      nameEnglish: 'Professor Huaian Diao',
      title: 'Professor, School of Mathematics, Jilin University',
      subtitle: 'Research interests include inverse problems in mathematical physics, wave scattering, spectral theory, and numerical computation.',
      welcome: 'Prospective undergraduate and graduate students are welcome to get in touch.'
    },
    research: [
      {
        title: 'Inverse Problems in Mathematical Physics',
        body: 'Developing theory and computation for recovering media, sources, and geometry from limited measurements.'
      },
      {
        title: 'Wave Scattering',
        body: 'Studying uniqueness, stability, and visibility questions in acoustic, elastic, and electromagnetic scattering.'
      },
      {
        title: 'Spectral Theory',
        body: 'Investigating transmission eigenvalues, scattering resonances, and related spectral structures.'
      },
      {
        title: 'Numerical Computation',
        body: 'Working on matrix computation, optimization, and numerical methods for differential equations.'
      }
    ],
    publications: representativePublications,
    teaching: {
      undergraduateTitle: 'Undergraduate Courses',
      graduateTitle: 'Graduate Courses',
      undergraduate: ['Modern Optimization Algorithms', 'Complex Analysis', 'Numerical Analysis', 'Convex Analysis', 'Numerical Methods for Differential Equations', 'Discrete Mathematics', 'Linear Algebra A'],
      graduate: ['Numerical Methods for Nonlinear Problems', 'Matrix Computation', 'Computational Optimization', 'Difference Methods for Differential Equations']
    },
    students: {
      prospectiveTitle: 'Prospective Students',
      opportunitiesTitle: 'Current Opportunities',
      outcomesTitle: 'Alumni / Student Outcomes',
      tableHeaders: ['Name', 'Training Level', 'Training Period', 'Placement'],
      prospective: [
        'Undergraduates interested in research training, graduation projects, or future graduate study are welcome to reach out.',
        'Master’s and PhD applicants with strong mathematical foundations are encouraged to get in touch.',
        'Please include a CV, transcript, and a short note about your research interests in the first email.'
      ],
      opportunities: [
        'Potential topics include inverse problems, wave scattering, spectral theory, and numerical computation.',
        'Students interested in combining rigorous analysis with computational methods are especially welcome.'
      ],
      outcomes: [
        {
          name: 'Qingle Meng',
          level: 'Master’s',
          period: '2015.09-2018.06',
          destinations: [
            'PhD student, Xiamen University (2018.09-2022.06)',
            'Postdoctoral Fellow, City University of Hong Kong (2022.09-2026.05)',
            'Associate Professor, Dalian University of Technology (2026.06-present)'
          ]
        },
        {
          name: 'Xiaoxu Fei',
          level: 'Master’s',
          period: '2019.09-2022.06',
          destinations: [
            'PhD student, Central South University (2022.09-2026.06)',
            'Joint PhD training, City University of Hong Kong (2024.09-2026.06)'
          ]
        },
        {
          name: 'Li Wang',
          level: 'Master’s',
          period: '2018.09-2021.06',
          destinations: [
            'Research Assistant, Department of Mathematics, Hong Kong Baptist University (2021.09-2022.05)',
            'PhD student, Department of Mathematics, City University of Hong Kong (2022.09-present)'
          ]
        }
      ]
    },
    contact: {
      emailLabel: 'Email',
      email: 'diao@jlu.edu.cn',
      officeLabel: 'Office',
      office: 'Room 524, Wuzuoqun Building, Jilin University',
      phoneLabel: 'Phone',
      phone: '0431-85166214',
      facultyPageLabel: 'Faculty Profile',
      facultyPageHref: 'https://math.jlu.edu.cn/info/1782/16720.htm',
      facultyPageText: 'Jilin University faculty page'
    }
  }
};
