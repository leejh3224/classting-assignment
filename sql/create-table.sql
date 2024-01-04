CREATE TABLE `school` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(191) NOT NULL COMMENT '주소',
  `name` varchar(191) DEFAULT NULL COMMENT '이름',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='학교';

CREATE TABLE `news` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `school_id` bigint NOT NULL COMMENT '학교 ID',
  `title` varchar(191) NOT NULL COMMENT '제목',
  `content` text NOT NULL COMMENT '내용',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='소식';

CREATE TABLE `subscription` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `school_id` bigint NOT NULL COMMENT '학교 ID',
  `student_id` bigint NOT NULL COMMENT '학생 ID',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='구독';

CREATE TABLE `student` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `school_id` bigint NOT NULL COMMENT '학교 ID',
  `name` varchar(191) NOT NULL COMMENT '이름',
  `roles` json NOT NULL COMMENT '권한',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='학생';

CREATE TABLE `feed` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint NOT NULL COMMENT '학교 ID',
  `news_id` bigint NOT NULL COMMENT '소식 ID',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='피드';
