/*
  Warnings:

  - You are about to drop the `SensorData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `SensorData`;

-- CreateTable
CREATE TABLE `sensor_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time_measured` VARCHAR(191) NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `relative_humidity` DOUBLE NOT NULL,
    `ambient_light` DOUBLE NOT NULL,
    `barometric_pressure` DOUBLE NOT NULL,
    `sound_noise` DOUBLE NOT NULL,
    `eTVOC` DOUBLE NOT NULL,
    `eCO2` DOUBLE NOT NULL,
    `discomfort_index` DOUBLE NOT NULL,
    `heat_stroke` DOUBLE NOT NULL,
    `vibration_information` INTEGER NOT NULL,
    `si_value` DOUBLE NOT NULL,
    `pga` DOUBLE NOT NULL,
    `seismic_intensity` DOUBLE NOT NULL,
    `temperature_flag` INTEGER NOT NULL,
    `relative_humidity_flag` INTEGER NOT NULL,
    `ambient_light_flag` INTEGER NOT NULL,
    `barometric_pressure_flag` INTEGER NOT NULL,
    `sound_noise_flag` INTEGER NOT NULL,
    `etvoc_flag` INTEGER NOT NULL,
    `eco2_flag` INTEGER NOT NULL,
    `discomfort_index_flag` INTEGER NOT NULL,
    `heat_stroke_flag` INTEGER NOT NULL,
    `si_value_flag` INTEGER NOT NULL,
    `pga_flag` INTEGER NOT NULL,
    `seismic_intensity_flag` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
