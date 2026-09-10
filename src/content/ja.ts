import { caseStudies } from "./shared";
import type { Dictionary } from "./types";

/**
 * Japanese translation of `en.ts`. Same facts, same structure. Nothing added and
 * nothing dropped. Proper nouns (company, institution and product names) stay in
 * Latin script, which is the normal convention for foreign organisations.
 */
const ja: Dictionary = {
  locale: "ja",
  seo: {
    title: "パルタ・プロティム・サルマ | データサイエンスエンジニア / ソフトウェア開発",
    description:
      "パルタ・プロティム・サルマは、インド・アッサム州出身のコンピュータサイエンスエンジニアです。Druooz Pvt. Ltd. で4つのプロダクトのインターフェースを設計・リリースした1年を経て、データサイエンスエンジニアリングとソフトウェア開発を目指しています。工学士（コンピュータサイエンス）。日本語を学習中で、日本での就業を目指しています。",
    keywords: [
      "パルタ・プロティム・サルマ",
      "Partha Protim Sarmah",
      "データサイエンスエンジニア",
      "ソフトウェア開発",
      "UI/UXデザイナー",
      "Python",
      "インド",
      "アッサム",
      "日本",
      "日本 就職",
      "ポートフォリオ",
    ],
    languageName: "日本語",
  },
  person: {
    nameLines: ["パルタ・プロティム", "サルマ"],
    fullName: "パルタ・プロティム・サルマ",
    nameAlt: "Partha Protim Sarmah",
    title: "UI/UXデザイナー",
    target: "データサイエンスエンジニア / ソフトウェア開発",
    location: "インド・アッサム州ゴラガット",
    photo: "/partha.jpg",
    photoAlt: "パルタ・プロティム・サルマ",
  },
  hero: {
    kanji: "静かに作る",
    kanjiMeaning: "しずかに つくる",
    statement:
      "コンピュータサイエンスを修め、UI/UX デザインの実務経験を持つエンジニアです。実際に運用されるアプリケーションのインターフェース設計に携わってきました。",
    coreSkills: {
      label: "主なスキル",
      items: ["Python", "Java", "JavaScript", "C++", "UI/UX デザイン"],
    },
    support:
      "データサイエンス、ソフトウェア、そして人を中心に据えたデジタルソリューションに関心があります。日本語は現在 JLPT N3 レベルを学習中です。",
  },
  quickFacts: [
    {
      label: "注力分野",
      value: "データサイエンス・ソフトウェア開発",
    },
    {
      label: "実務経験",
      value: "1年（Druooz Pvt. Ltd. にて UI/UX）",
    },
    {
      label: "学歴",
      value: "工学士（コンピュータサイエンス）CIT Kokrajhar",
    },
    { label: "日本語", value: "学習中" },
    {
      label: "使用言語",
      value: "アッサム語・英語・ヒンディー語",
    },
  ],
  heading: {
    about: {
      alt: "About",
      title: "自己紹介",
      lead: "経歴、実績、技術スタック、そして次の方向。",
    },
    experience: {
      alt: "Experience",
      title: "職務経歴",
      lead: "バンガロールの Druooz Pvt. Ltd. での1年間。インターンからデザイナーへ、4つのプロダクトをリリースしました。",
    },
    projects: {
      alt: "Work",
      title: "制作実績",
      lead: "ひとつのプラットフォームのための4つのプロダクト。すべてがひとつの製品に感じられるように設計しました。",
    },
    skills: {
      alt: "Skills",
      title: "スキル",
      lead: "一方にエンジニアリングの基礎、もう一方にプロダクトデザイン。",
    },
    education: {
      alt: "Education",
      title: "学歴",
      lead: "アッサムで学んだ、コンピュータサイエンスと工学の6年間。",
    },
    "major-project": {
      alt: "Major Project",
      title: "主要プロジェクト",
      lead: "集大成となる一作を、技術的な深さまで。",
    },
    "university-life": {
      alt: "University",
      title: "学生時代",
      lead: "アッサムでの6年間の専門教育。Nalbari Polytechnic で3年、CIT Kokrajhar でさらに3年。仕事に就くよりずっと前に、働き方の土台がつくられました。",
    },
    japan: {
      alt: "Japan",
      title: "なぜ日本か",
      lead: "日本でキャリアを、そして生活を築きたい理由。",
    },
    interests: {
      alt: "Interests",
      title: "趣味",
      lead: "画面から離れているとき。",
    },
    contact: {
      alt: "Contact",
      title: "お問い合わせ",
    },
  },
  about: {
    paragraphs: [
      "私の経歴は UI/UX デザイン、IoT、Web 開発にまたがります。複数のアプリケーションのユーザーインターフェースを設計し、配車アプリ、図書館自動化システム、電子カルテといった実際のプロジェクトに携わってきました。",
      "エンジニアリング側の道具は Python、Java、C、C++、JavaScript、MySQL。デザイン側は Figma と UI/UX の基礎。そして、システム思考へと私を引き込んだ Solidity とブロックチェーン。Git、GitHub、アジャイルで開発し、個別のチケットではなくソフトウェアライフサイクル全体で考えます。",
      "いま目指しているのは、データサイエンスエンジニアリングとソフトウェア開発です。デザインは「画面の向こうにいる人」から考えることを教えてくれました。その感覚を持ったまま、データとモデル、そしてその下にあるシステムに向き合いたいと考えています。",
    ],
    principlesLabel: "仕事の進め方",
    principles: [
      {
        glyph: "間",
        romaji: "ma",
        title: "余白もデザインのうち",
        body: "何を省くかが、残したものの読まれ方を決めます。インターフェースにも、コードにも、説明にも、同じ推敲をします。",
      },
      {
        glyph: "改善",
        romaji: "kaizen",
        title: "小さく、続けて良くする",
        body: "4つのアプリケーションを開発者やステークホルダーと磨き続けた1年が教えてくれたのは、完璧を待つより、出して直すほうが早いということでした。",
      },
      {
        glyph: "型",
        romaji: "kata",
        title: "型を学び、そこから動く",
        body: "まず基礎から。プログラミングパラダイム、ソフトウェアライフサイクル、言語の文法。流暢さは、型が固まったあとに来ます。",
      },
    ],
  },
  aboutPage: {
    sectionLabels: {
      identity: "システム識別",
      telemetry: "実行ログ",
      modules: "モジュール構成",
      directives: "行動指針",
      trajectory: "今後の方向",
    },
    identity: {
      statement:
        "コンピュータサイエンス・エンジニアリング卒。工学士とディプロマ。人間中心のインターフェース設計と、バックエンドおよびシステム的思考を接続します。",
      readout: [
        { key: "学位", value: "工学士（CSE）CIT Kokrajhar" },
        { key: "ディプロマ", value: "CSE, Nalbari Polytechnic" },
        { key: "リリース", value: "本番アプリケーション 4件" },
        { key: "方向", value: "データサイエンス、ソフトウェア開発" },
        { key: "言語", value: "アッサム語、英語、ヒンディー語、日本語（学習中）" },
      ],
    },
    telemetry: {
      lead: "インターフェース設計と分散システムにわたる実績。",
      nodes: [
        {
          id: "druooz",
          label: "Druooz Pvt. Ltd.",
          period: "2024年3月〜2025年2月",
          summary: "UI/UXデザイナー。本番アプリ4件。インターンからデザイナーへ。",
          detail: [
            "乗客アプリ、ドライバーアプリ、公式サイト、社内 ERP。4つの面にひとつのブランドシステム。",
            "ワイヤーフレーム、プロトタイプ、仕様、ハンドオフまで一貫して担当。",
            "デスクトップ・タブレット・モバイルに対応。",
            "ERP のユーザビリティ改善により社内業務の処理効率が向上。",
          ],
        },
        {
          id: "arogyachain",
          label: "ArogyaChain",
          period: "卒業プロジェクト・2023年",
          summary: "Hyperledger Fabric 上の電子カルテ基盤。",
          detail: [
            "病院、政府機関、医療技術企業、保険会社をつなぐ許可型ネットワーク。",
            "記録の実体は IPFS でオフチェーン保存。",
            "組織横断で検索・検証できる EHR トランザクションスキーマ。",
            "Aadhaar 連携のオンチェーン患者同意（付与・取り消し）。",
          ],
        },
      ],
    },
    modules: {
      lead: "レイヤー別の技術スタック。",
      clusters: [
        {
          id: "core",
          label: "言語",
          items: ["Python", "Java", "C", "C++", "JavaScript", "Solidity"],
        },
        {
          id: "data",
          label: "データとワークフロー",
          items: ["MySQL", "Git", "GitHub", "アジャイル"],
        },
        {
          id: "interface",
          label: "デザイン",
          items: ["Figma", "UI/UX の基礎"],
        },
      ],
    },
    directives: {
      lead: "借りて、使い続けている3つの原則。",
      items: [
        {
          glyph: "間",
          romaji: "ma",
          name: "余白の設計",
          body: "インターフェース、コードの論理、技術文書に対する精密な推敲。何を削るかが、残りの読まれ方を決めます。",
        },
        {
          glyph: "改善",
          romaji: "kaizen",
          name: "継続的な反復",
          body: "素早いプロトタイピング、短いフィードバックの往復、理論上の完璧より出す速さ。",
        },
        {
          glyph: "型",
          romaji: "kata",
          name: "基礎の習得",
          body: "複雑な抽象を組む前に、中核となるパラダイムと計算機科学の基礎を。",
        },
      ],
    },
    trajectory: {
      lead: "次に向かう先。",
      items: [
        {
          index: "01",
          label: "スケールする知的システム",
          body: "デモ環境ではなく、実負荷に耐えるソフトウェア。",
        },
        {
          index: "02",
          label: "予測分析",
          body: "ダッシュボードを飾るのではなく、意思決定に効くモデル。",
        },
        {
          index: "03",
          label: "データ駆動のプロダクト",
          body: "下にあるデータの上に立ち、それを読む人のために設計されたインターフェース。",
        },
      ],
    },
  },

  experience: [
    {
      company: "Druooz Pvt. Ltd.",
      role: "UI/UXデザイナー",
      kind: "正社員",
      location: "インド・カルナータカ州バンガロール",
      period: "2024年9月〜2025年2月",
      highlights: [
        "ユーザーアプリ、ドライバーアプリ、公式ウェブサイト、ERP システムという4つの主要アプリケーションのユーザーインターフェースを設計・開発し、プラットフォーム間で一貫したブランド体験を実現しました。",
        "ワイヤーフレームとプロトタイピングから最終デザインまで、UI/UX の全工程を主導し、直感的で視覚的にも魅力的なインターフェースを実現しました。",
        "開発者やステークホルダーを含む部門横断チームと密に連携し、要件を収集し、ビジネス上のニーズを有効なデザイン解へと落とし込みました。",
        "Figma でインタラクティブなプロトタイプとデザイン仕様を作成し、開発チームへのハンドオフを効率化しました。",
        "レスポンシブデザインの原則を適用し、デスクトップ・タブレット・モバイルのいずれでも最適な体験を確保しました。",
        "ERP システムのユーザビリティを改善し、業務の効率的な管理と社内チームのワークフロー生産性の向上に貢献しました。",
      ],
      links: [
        {
          label: "ユーザーアプリのケーススタディ",
          href: caseStudies.userApp,
        },
        {
          label: "ドライバーアプリのケーススタディ",
          href: caseStudies.driverApp,
        },
      ],
    },
    {
      company: "Druooz Pvt. Ltd.",
      role: "UI/UXデザイナー（インターン）",
      kind: "インターン",
      location: "インド・カルナータカ州バンガロール",
      // CV の表記どおり。上の正社員期間と重なっており、2024年8月の誤記の可能性が高い。
      period: "2024年3月〜2025年8月",
      highlights: [
        "ユーザーアプリのユーザーインターフェースを設計・開発し、プラットフォーム間で一貫したブランド体験を実現しました。",
      ],
      links: [
        {
          label: "ユーザーアプリのケーススタディ",
          href: caseStudies.userApp,
        },
      ],
    },
  ],
  projects: {
    items: [
      {
        name: "Druooz User App",
        glyph: "乗客アプリ",
        role: "UI/UXデザイン（全工程）",
        context: "Druooz Pvt. Ltd. · 配車プラットフォーム",
        summary:
          "配車アプリの乗客側。ワイヤーフレームから最終的なレスポンシブ画面まで設計し、開発チームへインタラクティブなプロトタイプを引き渡しました。",
        stack: ["Figma", "ワイヤーフレーム", "プロトタイピング", "レスポンシブデザイン"],
        href: caseStudies.userApp,
        hrefLabel: "ケーススタディを読む",
      },
      {
        name: "Druooz Driver App",
        glyph: "ドライバーアプリ",
        role: "UI/UXデザイン（全工程）",
        context: "Druooz Pvt. Ltd. · 配車プラットフォーム",
        summary:
          "ドライバー側のアプリ。乗客用アプリとひとつのブランド言語を共有しながら、まったく異なる目的に応える設計としました。",
        stack: ["Figma", "デザインシステム", "プロトタイピング"],
        href: caseStudies.driverApp,
        hrefLabel: "ケーススタディを読む",
      },
      {
        name: "Druooz ERP System",
        glyph: "業務システム",
        role: "UI/UXデザイン",
        context: "Druooz Pvt. Ltd. · 社内業務",
        summary:
          "社内 ERP のユーザビリティ改善。業務の効率的な管理を可能にし、毎日それを使うチームのワークフロー生産性を高めました。",
        stack: ["Figma", "情報設計", "ユーザビリティ"],
      },
      {
        name: "Druooz Official Website",
        glyph: "コーポレートサイト",
        role: "UI/UXデザイン",
        context: "Druooz Pvt. Ltd. · 公開ウェブ",
        summary:
          "プラットフォームの顔となるサイト。2つのアプリと同じブランド体験を、デスクトップ・タブレット・モバイルで届けます。",
        stack: ["Figma", "レスポンシブデザイン", "ブランドの一貫性"],
      },
    ],
  },
  skills: {
    groups: [
      {
        glyph: "言語",
        title: "プログラミング言語",
        items: ["Python", "Java", "C", "C++", "JavaScript", "MySQL"],
      },
      {
        glyph: "ウェブ",
        title: "Web 技術",
        items: ["HTML", "CSS"],
      },
      {
        glyph: "設計",
        title: "デザイン・プロダクト",
        items: [
          "Figma",
          "UI/UX の基礎",
          "ワイヤーフレーム",
          "プロトタイピング",
          "レスポンシブデザイン",
        ],
      },
      {
        glyph: "開発",
        title: "ソフトウェア開発",
        items: [
          "プログラミングパラダイム",
          "Git",
          "GitHub",
          "アジャイル開発",
          "ソフトウェアライフサイクル",
        ],
      },
      {
        glyph: "他",
        title: "その他",
        items: [
          "Solidity",
          "ブロックチェーン",
          "IoT",
          "クリティカルシンキング",
          "問題解決",
        ],
      },
    ],
    languagesGlyph: "言葉",
    languagesTitle: "言語",
    languages: [
      {
        name: "アッサム語",
        level: "母語",
      },
      {
        name: "英語",
        level: "流暢",
      },
      {
        name: "ヒンディー語",
        level: "流暢",
      },
      {
        name: "日本語",
        level: "学習中",
      },
    ],
  },
  education: [
    {
      institution: "Central Institute of Technology, Kokrajhar",
      qualification: "工学士（コンピュータサイエンス・エンジニアリング）",
      location: "インド・アッサム州コクラジャール",
      period: "2020年9月〜2023年6月",
      result: "CGPA 7.1 / 10",
    },
    {
      institution: "Nalbari Polytechnic, Chandkuchi",
      qualification: "ディプロマ（コンピュータサイエンス・エンジニアリング）",
      location: "インド・アッサム州ナルバリ",
      period: "2017年7月〜2020年6月",
      result: "CGPA 7.1 / 10",
    },
  ],
  majorProject: {
    roleLabel: "担当",
    stackLabel: "技術スタック",
    problemLabel: "解決した課題",
    contributionsLabel: "技術的な担当",
    repoLabel: "GitHub でリポジトリを見る",
    outcomesLabel: "設計目標と成果",
    // 出典: 卒業プロジェクト発表資料（CIT Kokrajhar、2023年3月14日）。
    // 注: 発表資料は3人チームの成果であり、担当者ごとの記載はありません。
    // contributions はプロジェクト単位で記述しています。公開前に本人の担当分へ
    // 絞り込んでください。
    project: {
      name: "ArogyaChain",
      glyph: "電子カルテ",
      role: "卒業研究（主要プロジェクト）· 3名チーム",
      period: "2023年3月 発表",
      context:
        "Central Institute of Technology, Kokrajhar · 指導教員 Dr. Pranav Kumar Singh",
      summary:
        "Hyperledger Fabric 上に構築した、組織横断型の電子カルテ（EHR）システムです。ArogyaChain は中央集権的なサーバーと許可型ブロックチェーンを組み合わせ、病院・政府機関・医療技術企業・保険会社が患者の医療記録を維持・共有・検証できるようにします。すべてのアクセス権は患者自身が握ります。",
      stack: [
        "Hyperledger Fabric",
        "ブロックチェーン",
        "IPFS",
        "許可型ネットワーク",
        "PKI / 認証局",
        "Aadhaar ベースの本人確認",
        "JSON スキーマ設計",
      ],
      problem:
        "インドの医療記録は組織ごとに分断されており、誤診、追跡の非効率、データ整合性の低下を招いています。個人レベルでも組織レベルでも記録の保存と維持が難しく、セキュリティと患者のプライバシーを損なわずに組織間で共有する信頼できる手段がありませんでした。",
      contributions: [
        "病院・政府機関・医療技術企業・保険会社をつなぐ許可型 Hyperledger Fabric ネットワークを設計し、記録の実体は IPFS でオフチェーンに保存する構成としました。",
        "EHR トランザクションのスキーマを定義しました。記録種別、発行医師と病院の登録番号、患者情報、診断名、重症度、処方薬までを含め、組織をまたいで検索・検証できる形にしています。",
        "ブロックチェーン上で動く患者同意システムを構築し、アクセス権の付与・取り消しのフローを実装。患者と医療従事者の双方を Aadhaar ベースで登録します。",
        "モバイルインターフェースを設計しました。証明書と秘密鍵による登録・ログイン、種別ごとの医療記録の閲覧、EHR 詳細画面、アクセス権の付与・取り消し画面までを含みます。",
      ],
      outcomes: [
        {
          body: "設定した設計目標を満たしました。セキュリティ、患者データのプライバシー、可用性、スケーラビリティ、医療記録の効率的な検索、柔軟なアクセス制御、信頼性、そして登録・登録秘密鍵の復旧手段です。",
        },
        {
          body: "インドの医療エコシステムに合わせて設計しています。Aadhaar による患者・医療従事者のオンボーディング、ブロックチェーン上の同意システム、政府の医療データベースとの連携。",
        },
        {
          body: "2023年3月に CIT Kokrajhar で発表。今後の展開として、医療データを扱う他組織の受け入れ、透明性のある請求・会計システム、認証局への依存をなくす分散型 ID の構築を挙げています。",
        },
      ],
      // 仮リンク。GitHub プロフィールを指しています。ArogyaChain のリポジトリが
      // 公開されたら差し替えてください。
      repoUrl: "https://github.com/TBug014",
    },
  },
  // 未入力。CV に記載なし。空のあいだはセクションごと表示されません。
  universityLife: {
    entries: [],
  },
  japan: {
    goalLabel: "目標",
    goal: "日本で働き、暮らす",
    goalAlt: "Work and settle in Japan",
    // 語学は「継続中の取り組み」として記述。取得済みの資格やレベルは主張しない。
    languageNote:
      "日本語は毎日学習しており、今後の日本語能力試験の受験に向けて準備を進めています。まだ途上の、進行中の取り組みです。",
    paragraphs: [
      "日本に惹かれたきっかけは、目新しさではなく既視感でした。動画で目にする日本の田舎が、生まれ育ったアッサムによく似ていたのです。緑の山、川の流れる谷、静かな集落。もともとそうした風景に惹かれる質で、その符合が、漠然とした興味を日本とその文化への本気の関心に変えました。",
      "キャリアは日本のテクノロジー業界で築きたいと考えています。分野はソフトウェアエンジニアリング、あるいはデータサイエンス。大学で学び、その後も取り組み続けてきた領域です。通り過ぎる場所ではなく、住み続けるつもりの場所でその力を使いたい。実際に使われるものをつくれるエンジニアになることが目標です。",
      "仕事の外での計画も、はっきりしています。翻訳しながらではなく日本語で暮らせるところまで学習を続けること。都市部だけでなく地方を旅すること。外から眺めるのではなく、その土地の文化にきちんと根を下ろすこと。求めているのは数年の赴任ではなく、長く続く生活です。",
    ],
    aimsLabel: "取り組んでいること",
    aims: [
      {
        glyph: "語学",
        romaji: "gogaku",
        gloss: "毎日の学習。試験合格と、日本語で考えられる状態を目指して",
      },
      {
        glyph: "地方",
        romaji: "chihō",
        gloss: "きっかけになった地方の日本へ。都市だけでは終わらせない",
      },
      { glyph: "技術", romaji: "gijutsu", gloss: "日本のテクノロジー業界で、長く働く" },
    ],
  },
  // 未入力。上記 universityLife と同じ。
  interests: {
    items: [],
  },
  contact: {
    body: "データサイエンスエンジニアリングとソフトウェア開発の職を探しています。採用をご検討中の方も、デザインやデータ、日本語について話したい方も、お気軽にご連絡ください。",
    responseNote: "メールが最も確実です。",
    locationLabel: "所在地",
  },
  pages: {
    projects: "制作",
    about: "紹介",
    resume: "履歴書",
  },
  nav: [
    {
      id: "about",
      label: "紹介",
      alt: "About",
    },
    {
      id: "experience",
      label: "職歴",
      alt: "Experience",
    },
    {
      id: "projects",
      label: "制作",
      alt: "Work",
    },
    {
      id: "skills",
      label: "スキル",
      alt: "Skills",
    },
    {
      id: "education",
      label: "学歴",
      alt: "Education",
    },
    {
      id: "major-project",
      label: "主要制作",
      alt: "Major Project",
    },
    {
      id: "university-life",
      label: "学生時代",
      alt: "University",
    },
    {
      id: "japan",
      label: "日本語",
      alt: "Japanese",
    },
    {
      id: "interests",
      label: "趣味",
      alt: "Interests",
    },
    {
      id: "contact",
      label: "連絡",
      alt: "Contact",
    },
  ],
  ui: {
    skipToContent: "本文へスキップ",
    backToTop: "ページ先頭へ",
    letsTalk: "お問い合わせ",
    availableForWork: "求職中",
    resumeShort: "履歴書",
    viewResume: "履歴書を見る",
    openInNewTab: "新しいタブで開く",
    close: "閉じる",
    expand: "展開",
    collapse: "折りたたむ",
    onThisPage: "このページの内容",
    resumeFallback:
      "このブラウザでは PDF をここに表示できません。新しいタブで開くか、下からダウンロードしてください。",
    downloadResume: "履歴書をダウンロード",
    downloadResumePdf: "履歴書をダウンロード（PDF）",
    viewWork: "制作実績を見る",
    menu: "メニュー",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    siteNavigation: "サイトナビゲーション",
    sections: "セクション",
    switchToLight: "ライトテーマに切り替える",
    switchToDark: "ダークテーマに切り替える",
    switchTheme: "テーマを切り替える",
    opensInNewTab: "（新しいタブで開きます）",
    languageLabel: "言語",
    switchLanguage: "Read in English",
    credo: "よい技術者になる。役に立つものをつくる。そして、歩き続ける。",
    rights: "All rights reserved.",
    notFoundAlt: "Not found",
    notFoundLead:
      "このページは存在しません。ただ、そこにあったはずの余白だけは、よく整っています。",
    notFoundReturn: "ホームへ戻る",
  },
};

export default ja;
