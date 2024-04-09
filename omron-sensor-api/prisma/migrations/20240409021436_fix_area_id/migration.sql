/*
  Warnings:

  - You are about to drop the column `area` on the `sensor_data` table. All the data in the column will be lost.
  - Added the required column `area_id` to the `sensor_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sensor_data` DROP COLUMN `area`,
    ADD COLUMN `area_id` INTEGER NOT NULL;
