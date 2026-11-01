/* Page content. Every visible string is { ko, en }. */
window.PORTFOLIO = {
  ui: {
    ko: {
      "nav.work": "작업", "nav.polygon": "서버", "nav.more": "그 밖에", "nav.papers": "논문",
      "hero.artist": "since 2017",
      "hero.lede": "실용주의 개발자",
      "h.work": "주요 작업", "h.polygon": "서버", "h.more": "그 밖의 작업", "h.freelance": "외주", "h.papers": "논문", "h.stack": "기술",
      "lamp.fc": "실사용자와 함께 장기 운영하고 완결", "lamp.exh": "학술 검증과 실증까지", "lamp.hard": "실제 환경에 배포해 쓰이는 중", "lamp.clear": "완성·발표", "lamp.easy": "연습·과제",
      "polygon.more": "polygon.nz에서 자세히 보기", "polygon.status": "외부 감시탑 (stats.polygon.nz)",
      "px.scale": "배율", "px.bilinear": "쌍선형 보간", "px.nearest": "최근접 보간", "px.pz": "PixelZoom", "px.widths": "도트 폭"
    },
    en: {
      "nav.work": "Work", "nav.polygon": "Server", "nav.more": "More", "nav.papers": "Papers",
      "hero.artist": "since 2017",
      "hero.lede": "A pragmatic developer",
      "h.work": "Selected work", "h.polygon": "Server", "h.more": "More work", "h.freelance": "Freelance", "h.papers": "Papers", "h.stack": "Stack",
      "lamp.fc": "long-running with real users, and complete", "lamp.exh": "peer-reviewed and demonstrated", "lamp.hard": "deployed and in use", "lamp.clear": "finished or presented", "lamp.easy": "practice and coursework",
      "polygon.more": "More at polygon.nz", "polygon.status": "External watchtower (stats.polygon.nz)",
      "px.scale": "scale", "px.bilinear": "bilinear", "px.nearest": "nearest neighbour", "px.pz": "PixelZoom", "px.widths": "dot widths"
    }
  },

  facts: [
    { k: { ko: "학부", en: "School" }, v: { ko: "동국대학교 컴퓨터·AI학부", en: "Dongguk University, Computer Science & AI" } },
    { k: { ko: "연구실", en: "Lab" }, v: { ko: "인간-로봇 상호작용 연구실, 학부연구생", en: "Human-Robot Interaction Lab, undergraduate researcher" } },
    { k: { ko: "분야", en: "Focus" }, v: { ko: "백엔드, 서버 인프라, 이미지 처리", en: "Backend, server infrastructure, image processing" } },
    { k: { ko: "연락", en: "Contact" }, v: "vegarian@dgu.ac.kr", u: "mailto:vegarian@dgu.ac.kr" },
    { k: "GitHub", v: "github.com/Coldlapse", u: "https://github.com/Coldlapse" }
  ],

  glance: [
    { n: "{bm.users}", v: { ko: "beatmania.app 가입자", en: "beatmania.app users" } },
    { n: "{iidx.dl}", v: { ko: "IIDXwidget 다운로드", en: "IIDXwidget downloads" } },
    { n: "2", v: { ko: "제1저자 논문", en: "first-author papers" } },
    { n: "4", v: { ko: "완수한 외주", en: "freelance projects" } },
    { n: "2021", v: { ko: "홈 서버 운영 시작", en: "running my own server since" } }
  ],

  // Fallback values; tokens like {iidx.dl} in any text are replaced with live numbers once fetched.
  live: { "iidx.dl": "619", "iidx.rel": "18", "bm.users": "295", "bm.records": "66,411", "bm.visits": "15,217" },

  legend: ["fc", "exh", "hard", "clear", "easy"],

  cases: [
    {
      id: "beatmania", title: "beatmania.app", lamp: "fc",
      one: { ko: "beatmania IIDX INFINITAS 난이도 서열표·클리어 기록 서비스. 1인 개발·운영 (2022 Q4–, 현재 유지보수).", en: "Rank tables and clear records for beatmania IIDX INFINITAS. Built and run solo (Q4 2022–, now in maintenance)." },
      links: [
        { t: "beatmania.app", u: "https://beatmania.app" },
        { t: "GitHub", u: "https://github.com/Coldlapse/beatmania.app" },
        { t: "Synchronizer", u: "https://github.com/Coldlapse/beatmania.app-synchronizer" }
      ],
      lead: { src: "assets/media/beatmania-top.webp", w: 1620, h: 465, alt: { ko: "beatmania.app 사용자 페이지 상단(다크 모드). 메뉴, 프로필과 BPI·CPI, 서열표 선택 버튼", en: "Top of a beatmania.app player page in dark mode: menu, profile with BPI and CPI, and the table picker" } },
      // Weekly averages of daily visits from beatmania.app/status/views.json, snapshot of 2025.10.27 – 2026.10.26.
      media: { type: "weekly", start: "2025-10-27",
        weeks: [19.3, 18.3, 19.7, 21.6, 18, 25.9, 23.3, 25.4, 23.4, 27.4, 32.1, 22.3, 23.6, 26.6, 25.4, 32.3, 26.7, 24.4, 55.4, 39.9, 36, 39.3, 43.1, 36, 37.7, 30, 44.4, 27.9, 25.4, 30.6, 34.6, 43, 49.7, 33, 35.9, 37, 32.4, 30.3, 25.1, 27.6, 35.9, 25.7, 26.7, 34.7, 69.9, 64.6, 58.4, 54.6, 103.4, 127.3, 129.7, 168.6],
        marks: [{ d: "2026-09-02", t: { ko: "9.02 개편", en: "Sep 2 redesign" } }, { d: "2026-09-26", t: { ko: "9.26 동기화 앱", en: "Sep 26 sync app" } }],
        avgs: [
          { from: "2025-10-27", to: "2026-09-02", v: 30.8, t: { ko: "개편 전", en: "Before" } },
          { from: "2026-09-02", to: "2026-09-26", v: 59.8, t: { ko: "개편 후", en: "Redesign" } },
          { from: "2026-09-26", to: "2026-10-27", v: 136.2, t: { ko: "앱 출시 후", en: "Sync app" } }
        ],
        alt: { ko: "beatmania.app 주별 일평균 방문 막대그래프. 개편 전 30.8회, 개편 후 59.8회, 동기화 앱 출시 후 136.2회", en: "Weekly bar chart of beatmania.app daily visits: 30.8 before the redesign, 59.8 after it, 136.2 after the sync app" },
        caption: { ko: "7일 묶음별 일평균 방문(서열표 페이지의 고유 세션). 가로선은 구간 평균. 2025.10.27 ~ 2026.10.26", en: "Average daily visits per week (unique sessions on the table pages). Horizontal lines are period averages. Oct 27, 2025 – Oct 26, 2026" } },
      wins: {
        ko: ["가입자 {bm.users}명 · 플레이 기록 {bm.records}건 · 최근 1년 방문 {bm.visits}회", "2026.09 화면 개편과 기록 동기화 앱 출시 뒤 일평균 방문 30.8 → 136.2회(4.4배), 손으로 입력해 4년간 쌓인 기록 3.8만 건이 두 달이 안 돼 6.6만 건으로", "서열표 응답 1.2초 → 54ms (N+1 쿼리 제거)", "Reflux와 연동해 게임 기록을 실시간으로 동기화하는 데스크톱 앱 개발·배포", "mod_wsgi → Docker·gunicorn 무중단 이전, Cloudflare Tunnel과 self-hosted CI/CD"],
        en: ["{bm.users} users · {bm.records} play records · {bm.visits} visits in the past year", "After the Sep 2026 redesign and the record-sync app launch, daily visits rose from 30.8 to 136.2 (4.4×), and records that took four years of manual entry to reach 38K grew to 66K in under two months", "Table page 1.2 s → 54 ms (removed an N+1 query)", "Built and shipped a desktop app that syncs game records live via Reflux", "Moved from mod_wsgi to Docker + gunicorn without downtime; Cloudflare Tunnel and self-hosted CI/CD"]
      }
    },
    {
      id: "pixelzoom", title: "PixelZoom", lamp: "exh",
      one: { ko: "픽셀 아트를 소수 배율로 키워도 도트 크기가 고르게 유지되는 스케일링 알고리즘. 팀장·코어 알고리즘 설계.", en: "A scaling algorithm that keeps every dot the same size at fractional scales. Team lead and core algorithm designer." },
      links: [
        { t: { ko: "논문", en: "Paper" }, u: "https://doi.org/10.3390/app16052314" },
        { t: { ko: "실증용 웹", en: "Demo site" }, u: "https://pixelzoom.app" },
        { t: "GitHub", u: "https://github.com/Coldlapse/PixelZoom" }
      ],
      media: { type: "pixel" },
      wins: {
        ko: ["Applied Sciences(SCI) 제1저자 논문 게재 (2026.02)", "실증용 웹 서비스 공개: AWS Lambda·Terraform, 무료 티어 운영", "원본 구현 대조 61장 중 60장 일치, 나머지 1장으로 원본 버그 발견"],
        en: ["First-author paper in Applied Sciences (SCI), Feb 2026", "Demo web service on AWS Lambda and Terraform, running within the free tier", "Matched the original implementation on 60 of 61 samples; the last one exposed a bug in the original"]
      }
    },
    {
      id: "iidxwidget", title: "IIDXwidget", lamp: "fc",
      one: { ko: "리듬게임 방송용 입력 표시 OBS 위젯. 1인 개발·오픈소스 메인테이너 (2025.04–, 현재 유지보수).", en: "An OBS input-display widget for rhythm-game streams. Solo developer and open-source maintainer (Apr 2025–, now in maintenance)." },
      links: [
        { t: "iidxwidget.coldlapse.dev", u: "https://iidxwidget.coldlapse.dev" },
        { t: "GitHub", u: "https://github.com/Coldlapse/IIDXwidget" }
      ],
      media: { type: "video", items: [ { src: "assets/media/iidxwidget-play.mp4", poster: "assets/media/iidxwidget-play.jpg" } ] },
      wins: {
        ko: ["릴리스 {iidx.rel}회 · 설치 파일 다운로드 {iidx.dl}회 · 외부 기여 PR 3건 병합", "v3.0.0: 백신 오탐 2 → 0, npm audit 경고 32 → 0, 테스트 0 → 36", "beatmania.app과 연동해 일일 타건 기록·랭킹 제공"],
        en: ["{iidx.rel} releases · {iidx.dl} installer downloads · 3 merged community PRs", "v3.0.0: antivirus false positives 2 → 0, npm audit warnings 32 → 0, tests 0 → 36", "Connected to beatmania.app for daily keystroke logs and rankings"]
      }
    }
  ],

  polygon: {
    line: { ko: "2021년부터 직접 조립한 홈 서버 Polygon을 운영하고 있습니다. beatmania.app과 여러 개인 서비스가 여기서 돌아갑니다.", en: "Since 2021 I have run Polygon, a home server I assembled myself. beatmania.app and several personal services run on it." },
    points: {
      ko: ["Cloudflare Tunnel 공개 입구 · VPN 전용 관리 대시보드(2FA)", "저장소별 Docker Compose · self-hosted GitHub Actions runner 3대", "내부 지표·알림 + 외부 감시 서버 · 매일 암호화 오프사이트 백업"],
      en: ["Public traffic via Cloudflare Tunnel · VPN-only admin dashboard with 2FA", "Docker Compose per repository · three self-hosted GitHub Actions runners", "In-house metrics and alerts plus an external watchtower · nightly encrypted off-site backups"]
    },
    stack: "Ubuntu · Docker Compose · systemd · Cloudflare · Apache · TypeScript (Fastify, React) · SQLite · GitHub Actions · restic",
    url: "https://polygon.nz",
    status: "https://stats.polygon.nz"
  },

  songs: [
    { id: "synchronizer", title: "beatmania.app Synchronizer", lamp: "hard", year: "2026",
      win: { ko: "Reflux 연동, 게임 플레이 기록을 서열표로 자동 동기화", en: "Syncs play records to the tables automatically via Reflux" },
      links: [{ t: "GitHub", u: "https://github.com/Coldlapse/beatmania.app-synchronizer" }] },
    { id: "hj-queue", title: "HJ-QueueCounter", lamp: "hard", year: "2025–26",
      win: { ko: "오락실 대기 카드를 적외선 센서로 감지, 대기 인원을 웹에 실시간 공개", en: "IR sensors count arcade waiting cards and publish the queue online in real time" },
      links: [{ t: "GitHub", u: "https://github.com/Coldlapse/HJ-QueueCounter" }, { t: { ko: "대기 현황", en: "Live queue" }, u: "https://beatmania.app/status/IIDXLM/" }] },
    { id: "hrilab", title: { ko: "HRILab 홈페이지 서버 이전", en: "HRILab website migration" }, lamp: "hard", year: "2026",
      win: { ko: "NAS에서 랙 서버로 이전, HTTPS 전환 (hri.dongguk.edu)", en: "Moved from a NAS to a rack server and switched to HTTPS (hri.dongguk.edu)" },
      links: [{ t: "hri.dongguk.edu", u: "http://hri.dongguk.edu/" }] },
    { id: "mdv", title: "MDV", lamp: "clear", year: "2026",
      win: { ko: "Windows 11 Markdown 뷰어 오픈소스 기여: 한국어·영어 UI 번역, EUC-KR 등 비 UTF-8 문서 읽기 (PR 5건 병합)", en: "Open-source contributions to a Windows 11 Markdown viewer: Korean and English UI localization, reading non-UTF-8 files such as EUC-KR (5 PRs merged)" },
      links: [{ t: "GitHub", u: "https://github.com/kajiyajp/MDV" }, { t: { ko: "내 PR", en: "My PRs" }, u: "https://github.com/kajiyajp/MDV/pulls?q=is%3Apr+author%3AColdlapse" }] },
    { id: "pill", title: { ko: "알약 배경 제거기", en: "Pill background remover" }, lamp: "clear", year: "2025",
      win: { ko: "분할 정확도 IoU 0.32 → 0.81, 한국지능시스템학회 발표", en: "Segmentation IoU 0.32 → 0.81, presented at KIIS" },
      links: [{ t: "GitHub", u: "https://github.com/Coldlapse/pill-bg-remover" }] },
    { id: "geomemo", title: "GeoMemo", lamp: "clear", year: "2025",
      win: { ko: "5인 팀 백엔드: 계정 공개 범위·승인 팔로우·이메일 인증 구현", en: "Backend in a team of five: account visibility, approval-based follows, email verification" },
      links: [{ t: "GitHub", u: "https://github.com/2025-OSS-Project/GeoMemo-Backend" }] },
    { id: "early", title: { ko: "첫 C 프로그램들", en: "First C programs" }, lamp: "easy", year: "2017",
      win: { ko: "난수 생성기, MySQL UPDATE 콘솔 프로그램", en: "A random number generator and a MySQL UPDATE console app" },
      links: [{ t: "MyUpdate", u: "https://github.com/Coldlapse/MyUpdate" }, { t: "RandomnumCreator", u: "https://github.com/Coldlapse/RandomnumCreator" }] }
  ],

  freelance: { ko: ["외주 4건 완수.", "세부 내용은 비공개이며 요청 시 개인 포트폴리오로 공유합니다.", "지금도 외주를 받고 있습니다."], en: ["Four freelance projects delivered.", "Details are private and shared on request.", "Currently open to new work."] },

  papers: [
    { k: "2026", title: "Structure-Aware Pixel Art Scaling via Block Size Detection", sub: { ko: "Applied Sciences 16(5), 제1저자", en: "Applied Sciences 16(5), first author" }, u: "https://doi.org/10.3390/app16052314" },
    { k: "2025", title: "U2-Net의 도메인 특화 파인튜닝을 통한 실제 환경 알약 분할 성능 향상 연구", sub: { ko: "한국지능시스템학회 추계학술대회, 제1저자", en: "Korean Institute of Intelligent Systems conference, first author" } }
  ],

  stack: [
    { k: { ko: "언어", en: "Languages" }, v: "Python, TypeScript, JavaScript, C, C++, Java" },
    { k: { ko: "백엔드", en: "Backend" }, v: "Django, FastAPI, Node.js, Express, Fastify" },
    { k: { ko: "프론트·앱", en: "Frontend" }, v: "React, Vite, Electron" },
    { k: { ko: "데이터", en: "Data" }, v: "MySQL, SQLite, DynamoDB" },
    { k: { ko: "인프라", en: "Infra" }, v: "Ubuntu, Docker, Cloudflare, AWS, Terraform, GitHub Actions" },
    { k: { ko: "그 밖에", en: "Other" }, v: "OpenCV, PyTorch, Playwright, Arduino, Claude Code" }
  ]
};
